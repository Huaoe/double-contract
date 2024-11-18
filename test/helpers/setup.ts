import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { Contract } from "ethers";
import { ethers, upgrades } from "hardhat";

export interface TestContext {
  owner: SignerWithAddress;
  admin: SignerWithAddress;
  users: SignerWithAddress[];
  market: Contract;
  factory: Contract;
  implementation: Contract;
  beacon: Contract;
  mockNFT: Contract;
}

export async function setupTest(): Promise<TestContext> {
  const [owner, admin, ...users] = await ethers.getSigners();

  // 1. Deploy DoubleSVG library
  const DoubleSVG = await ethers.getContractFactory("DoubleSVG");
  const doubleSVG = await DoubleSVG.deploy();
  await doubleSVG.waitForDeployment();

  // 2. Deploy Market first
  const Market = await ethers.getContractFactory("Market");
  const market = await Market.deploy();
  await market.waitForDeployment();

  // 3. Deploy ComplexDoNFT implementation with library
  const ComplexDoNFT = await ethers.getContractFactory("ComplexDoNFT", {
    libraries: {
      DoubleSVG: await doubleSVG.getAddress()
    }
  });
  
  // 4. Deploy and initialize beacon with ComplexDoNFT implementation
  const beacon = await upgrades.deployBeacon(ComplexDoNFT, {
    unsafeAllow: ["external-library-linking"],
    initialOwner: owner.address
  });
  await beacon.waitForDeployment();

  // 5. Deploy Factory implementation
  const Factory = await ethers.getContractFactory("DoNFTFactory");
  
  // 6. Deploy and initialize factory proxy
  const factory = await upgrades.deployProxy(
    Factory,
    [
      owner.address,
      admin.address,
      await beacon.getAddress(),
      await market.getAddress()
    ],
    {
      initializer: 'initialize',
      unsafeAllow: ["external-library-linking"]
    }
  );
  await factory.waitForDeployment();

  // 7. Deploy MockNFT with IERC4907 support
  const MockNFT = await ethers.getContractFactory("MockNFT");
  const mockNFT = await MockNFT.deploy();
  await mockNFT.waitForDeployment();

  // 8. Set interface support for MockNFT
  if (typeof mockNFT.setInterfaceSupport === "function") {
    await mockNFT.setInterfaceSupport(true);
    // Wait for the transaction
    await mockNFT.waitForTransaction();
  }

  // 9. Deploy DoNFT through factory with proper error handling
  try {
    const deployTx = await factory.deployDoNFT(
      "Test DoNFT",
      "TDNFT",
      await mockNFT.getAddress(),
      owner.address,
      admin.address,
      users[1].address,
      "game12"
    );

    // Wait for deployment with more detailed receipt
    const receipt = await deployTx.wait();
    console.log("DoNFT deployment successful:", receipt.hash);

    // Debug: Log raw receipt
    console.log("Raw receipt:", JSON.stringify(receipt, null, 2));

    // Try getting events through getLogs() if events array is undefined
    const logs = receipt.logs || [];
    console.log("Transaction logs:", logs);

    // Parse logs manually if needed
    const deployEvent = logs.find(log => {
      try {
        const parsedLog = factory.interface.parseLog(log);
        return parsedLog.name === "DeployDoNFT" || parsedLog.name === "DoNFTDeployed";
      } catch (e) {
        return false;
      }
    });

    if (!deployEvent) {
      throw new Error("Failed to get proxy address from deployment event");
    }

    // Parse the event data
    const parsedEvent = factory.interface.parseLog(deployEvent);
    const proxyAddress = parsedEvent.args.proxy;
    console.log("Proxy address:", proxyAddress);

    // Verify proxy address before getting implementation
    if (!ethers.isAddress(proxyAddress)) {
      throw new Error(`Invalid proxy address: ${proxyAddress}`);
    }

    // Get implementation contract at proxy address
    const implementation = await ethers.getContractAt(
      "ComplexDoNFT",
      proxyAddress
    );

    return {
      owner,
      admin,
      users,
      market,
      factory,
      implementation,
      beacon,
      mockNFT,
    };
  } catch (error) {
    console.error("Deployment error details:", {
      message: error.message,
      data: error.data,
      transaction: error.transaction,
      stack: error.stack // Add stack trace for better debugging
    });
    throw error;
  }
}
