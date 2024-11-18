import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { setupTest, TestContext } from "./helpers/setup";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { MockNFT } from "../typechain-types";
import { IDoNFT } from "../typechain-types";

// Add interface for context
describe("DoNFT", function () {
  let ctx: TestContext;
  let mockNFT: MockNFT;
  let doNFT: IDoNFT;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let mockNFTWithUser: MockNFT;

  beforeEach(async function () {
    ctx = await setupTest();
    [owner, addr1, addr2] = await ethers.getSigners();

    // Deploy a basic ERC721 MockNFT without IERC4907 (for WrapNFT tests)
    const BasicMockNFT = await ethers.getContractFactory("BasicMockNFT");
    const basicMockNFTContract = await BasicMockNFT.deploy();
    await basicMockNFTContract.waitForDeployment();
    mockNFT = await ethers.getContractAt("BasicMockNFT", await basicMockNFTContract.getAddress()) as unknown as MockNFT;

    // Deploy MockNFT with IERC4907 (for DoNFT tests)
    const MockNFT = await ethers.getContractFactory("MockNFT");
    const mockNFTContract = await MockNFT.deploy();
    await mockNFTContract.waitForDeployment();
    mockNFTWithUser = await ethers.getContractAt("MockNFT", await mockNFTContract.getAddress()) as unknown as MockNFT;

    // Deploy DoubleSVG library first
    const DoubleSVG = await ethers.getContractFactory("DoubleSVG");
    const doubleSVG = await DoubleSVG.deploy();
    await doubleSVG.waitForDeployment();

    // Deploy ComplexDoNFT with library linking
    const DoNFT = await ethers.getContractFactory("ComplexDoNFT", {
      libraries: {
        DoubleSVG: await doubleSVG.getAddress()
      }
    });

    // Deploy the beacon using upgrades.deployBeacon
    const beacon = await upgrades.deployBeacon(DoNFT, {
      initialOwner: owner.address, // Specify the initial owner of the beacon
      unsafeAllow: ["external-library-linking"] // Allow external library linking
    });
    await beacon.waitForDeployment();

    // Deploy the beacon proxy using upgrades.deployBeaconProxy
    const proxy = await upgrades.deployBeaconProxy(
      beacon,
      DoNFT,
      [], // constructor args if any
      {
        initializer: false // disable initialization if not needed
      }
    );
    await proxy.waitForDeployment();

    // Get the proxy contract instance
    doNFT = await ethers.getContractAt("ComplexDoNFT", await proxy.getAddress()) as unknown as IDoNFT;

    console.log("mockNFT address: ", await mockNFT.getAddress());
    console.log("doNFT address: ", await doNFT.getAddress());
  });

  describe("Basic NFT Operations", function () {
    
    it("should verify factory contract interface", async function() {
      const factoryInterface = ctx.factory.interface;
      const deployFunction = factoryInterface.getFunction('deployDoNFT');
      console.log("Deploy function signature:", deployFunction.format());
      console.log("Factory address:", await ctx.factory.getAddress());
      const factoryCode = await ethers.provider.getCode(await ctx.factory.getAddress());
      expect(factoryCode).to.not.equal("0x"); // Verify contract is deployed
    });

    it("should deploy a WrapNFT correctly", async function() {
      const tx = await ctx.factory.deployWrapNFT(
        "Test WrapNFT",
        "TWNFT",
        await mockNFT.getAddress()
      );
      const receipt = await tx.wait();
      expect(receipt).to.not.be.undefined;
      // ... rest of the test
    });

  it("should deploy a DoNFT correctly", async function() {
    try {
      const mockNFTAddress = await mockNFTWithUser.getAddress();
      
      // Add implementation address logging
      console.log("Beacon implementation address:", await ctx.beacon.implementation());
      
      const tx = await ctx.factory.deployDoNFT(
        "Test DoNFT",
        "TDNFT",
        mockNFTAddress,
        owner.address,
        addr1.address,
        addr2.address,
        "game1"
      );
      
      // Wait for transaction and get more details
      const receipt = await tx.wait();
      console.log("Transaction receipt:", {
        status: receipt.status,
        gasUsed: receipt.gasUsed.toString(),
        events: receipt.events?.map(e => e.event)
      });
      
    } catch (error) {
      console.error("Deployment failed with error:", error);
      // Log the transaction if available
      if (error.transaction) {
        console.error("Transaction details:", {
          data: error.transaction.data,
          to: error.transaction.to,
          from: error.transaction.from
        });
      }
      throw error;
    }
  });

  // it("should revert when deploying DoNFT with existing gameKey", async function() {
  //   await ctx.factory.deployDoNFT(
  //     "Test DoNFT",
  //     "TDNFT",
  //     await mockNFTWithUser.getAddress(),
  //     owner.address,
  //     addr1.address,
  //     addr2.address,
  //     "gameKey123"
  //   );

  //   await expect(ctx.factory.deployDoNFT(
  //     "Another DoNFT",
  //     "ANDNFT",
  //     await mockNFTWithUser.getAddress(),
  //     owner.address,
  //     addr1.address,
  //     addr2.address,
  //     "gameKey123"
  //   )).to.be.revertedWith("depolyed already");
  // });

  // it("should revert when original NFT does not support IERC4907", async function() {
  //   await expect(ctx.factory.deployDoNFT(
  //     "Invalid DoNFT",
  //     "IDNFT",
  //     addr1.address,
  //     owner.address,
  //     addr1.address,
  //     addr2.address,
  //     "gameKeyInvalid"
  //   )).to.be.reverted;
  // });
  // });
});
});
