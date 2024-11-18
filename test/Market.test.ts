import { expect } from "chai";
import { setupTest, TestContext } from "./helpers/setup";
import { ethers } from "hardhat";

describe("NFT Marketplace", function () {
  let ctx: TestContext;

  beforeEach(async function () {
    ctx = await setupTest();
  });

  describe("Basic Functionality", function () {
    it("should initialize contracts correctly", async function () {
      expect(await ctx.market.owner()).to.equal(ctx.owner.address);
      expect(await ctx.market.admin()).to.equal(ctx.admin.address);
    });

    it("should deploy and initialize a DoNFT", async function () {
      const name = "Test NFT";
      const symbol = "TNFT";
      
      console.log("\n=== Starting DoNFT deployment test ===");
      console.log("Owner address:", ctx.owner.address);
      console.log("Admin address:", ctx.admin.address);
      console.log("MockNFT address:", ctx.mockNFT.getAddress());
      console.log("Factory address:", ctx.factory.getAddress());
      
      // Mint the NFT first
      const tokenId = await ctx.mockNFT.connect(ctx.owner).mint(ctx.owner.address);
      console.log("Minted NFT with tokenId:", tokenId.toString());
      
      // Deploy DoNFT with implementation address instead of beacon
      console.log("\nDeploying DoNFT...");
      const tx = await ctx.factory.deployDoNFT(
        name,
        symbol,
        await ctx.mockNFT.getAddress(),
        ctx.owner.address,
        ctx.admin.address,
        await ctx.implementation.getAddress(),
        "GAME_1"
      );

      console.log("Waiting for transaction receipt...");
      const receipt = await tx.wait();
      console.log("Transaction hash:", tx.hash);
      console.log("Number of logs:", receipt.logs.length);
      
      // Log all events for debugging
      console.log("\nAll logs:");
      receipt.logs.forEach((log, index) => {
        console.log(`\nLog ${index}:`);
        console.log("Topics:", log.topics);
        console.log("Data:", log.data);
        
        try {
          const parsed = ctx.factory.interface.parseLog({
            topics: log.topics,
            data: log.data
          });
          console.log("Parsed event name:", parsed?.name);
          console.log("Parsed args:", parsed?.args);
        } catch (e) {
          console.log("Failed to parse log");
        }
      });
      
      // New event handling for ethers v6
      const deployEvent = receipt.logs.find(log => {
        // Get the contract interface for the log
        const contractInterface = ctx.factory.interface;
        
        // Try to parse the log
        try {
          const parsedLog = contractInterface.parseLog({
            topics: log.topics,
            data: log.data
          });
          return parsedLog?.name === 'DoNFTDeployed' || parsedLog?.name === 'Deployed';
        } catch {
          return false;
        }
      });

      if (!deployEvent) {
        throw new Error("Deployment event not found");
      }

      // Parse the event using the new format
      const parsedEvent = ctx.factory.interface.parseLog({
        topics: deployEvent.topics,
        data: deployEvent.data
      });
      
      const doNFTAddress = parsedEvent?.args[0];

      if (!doNFTAddress || !ethers.isAddress(doNFTAddress)) {
        throw new Error(`Invalid DoNFT address: ${doNFTAddress}`);
      }

      // Get contract instance
      const doNFT = await ethers.getContractAt("ComplexDoNFT", doNFTAddress);

      // Verify deployment
      expect(await doNFT.name()).to.equal(name);
      expect(await doNFT.symbol()).to.equal(symbol);
    });
  });

  describe("Market Operations", function () {
    it("should create and validate a lending order", async function () {
      const tx = await ctx.factory.deployDoNFT(
        "Rental NFT",
        "RNFT",
        await ctx.mockNFT.getAddress(),
        ctx.owner.address,
        ctx.admin.address,
        await ctx.implementation.getAddress(),
        "GAME_1"
      );
      const receipt = await tx.wait();
      const deployEvent = receipt.logs.find(log => {
        try {
          const parsed = ctx.factory.interface.parseLog(log);
          return parsed.name === 'DoNFTDeployed' || parsed.name === 'Deployed';
        } catch (e) {
          return false;
        }
      });

      if (!deployEvent) {
        throw new Error("DoNFT deployment event not found");
      }

      const parsedEvent = ctx.factory.interface.parseLog(deployEvent);
      const doNFTAddress = parsedEvent.args[0];

      if (!doNFTAddress) {
        throw new Error("DoNFT address not found in event");
      }
      
      // Create lending order
      const maxEndTime = Math.floor(Date.now() / 1000) + 86400; // 1 day from now
      const minDuration = 3600; // 1 hour
      const pricePerDay = ethers.parseEther("0.1");

      await ctx.market.createLendOrder(
        doNFTAddress,
        1, // tokenId
        maxEndTime,
        minDuration,
        pricePerDay,
        await ctx.mockERC20.getAddress()
      );

      // Verify order
      const order = await ctx.market.getLendOrder(doNFTAddress, 1);
      expect(order.maxEndTime).to.equal(maxEndTime);
      expect(order.minDuration).to.equal(minDuration);
      
      // Verify order is valid
      expect(await ctx.market.isLendOrderValid(doNFTAddress, 1)).to.be.true;
    });

    it("should allow canceling a lending order", async function () {
      // Deploy DoNFT and create order first
      const tx = await ctx.factory.deployDoNFT(
        "Rental NFT",
        "RNFT",
        await ctx.mockNFT.getAddress(),
        ctx.owner.address,
        ctx.admin.address,
        await ctx.implementation.getAddress(),
        "GAME_1"
      );
      const receipt = await tx.wait();
      const deployEvent = receipt.logs.find(log => {
        try {
          const parsed = ctx.factory.interface.parseLog(log);
          return parsed.name === 'DoNFTDeployed' || parsed.name === 'Deployed';
        } catch (e) {
          return false;
        }
      });

      if (!deployEvent) {
        throw new Error("DoNFT deployment event not found");
      }

      const parsedEvent = ctx.factory.interface.parseLog(deployEvent);
      const doNFTAddress = parsedEvent.args[0];

      if (!doNFTAddress) {
        throw new Error("DoNFT address not found in event");
      }
      
      // Create order
      await ctx.market.createLendOrder(
        doNFTAddress,
        1,
        Math.floor(Date.now() / 1000) + 86400,
        3600,
        ethers.parseEther("0.1"),
        await ctx.mockERC20.getAddress()
      );

      // Cancel order
      await ctx.market.cancelLendOrder(doNFTAddress, 1);

      // Verify order is no longer valid
      expect(await ctx.market.isLendOrderValid(doNFTAddress, 1)).to.be.false;
    });
  });

  describe("Payment Handling", function () {
    it("should handle ERC20 payments correctly", async function () {
      // Mint some tokens to the user
      const paymentAmount = ethers.parseEther("1");
      await ctx.mockERC20.mint(ctx.users[0].address, paymentAmount);
      
      // Get the contract address first
      const marketAddress = await ctx.market.getAddress();
      
      // Approve market to spend tokens - fixed connection syntax
      await ctx.mockERC20.connect(ctx.users[0]).approve(
        marketAddress,
        paymentAmount
      );

      // Verify approval
      const allowance = await ctx.mockERC20.allowance(
        ctx.users[0].address,
        marketAddress
      );
      expect(allowance).to.equal(paymentAmount);
    });
  });
}); 