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
  
  // Deploy DoubleSVG library first
  const DoubleSVG = await ethers.getContractFactory("DoubleSVG");
  const doubleSVG = await DoubleSVG.deploy();
  await doubleSVG.waitForDeployment();

  // Deploy ComplexDoNFT as implementation
  const Implementation = await ethers.getContractFactory("ComplexDoNFT", {
    libraries: {
      DoubleSVG: await doubleSVG.getAddress()
    }
  });
  const beacon = await upgrades.deployBeacon(Implementation, {
    initialOwner: owner.address,
    unsafeAllow: ["external-library-linking"]
  });
  await beacon.waitForDeployment();

  // Deploy Market
  const Market = await ethers.getContractFactory("Market");
  const deployedMarket = await Market.deploy();
  await deployedMarket.waitForDeployment();

  // Deploy Factory
  const Factory = await ethers.getContractFactory("DoNFTFactory");
  const factory = await Factory.deploy(
    owner.address,
    admin.address,
    await beacon.getAddress(),
    await deployedMarket.getAddress()
  );
  await factory.waitForDeployment();

  // Deploy MockNFT
  const MockNFT = await ethers.getContractFactory("MockNFT");
  const mockNFT = await MockNFT.deploy();
  await mockNFT.waitForDeployment();

  // Make sure MockNFT supports IERC4907 interface
  // Assuming MockNFT has a function to set this up
  if (typeof mockNFT.setInterfaceSupport === 'function') {
    await mockNFT.setInterfaceSupport(true);
  }

  // Deploy DoNFT through factory
  const deployTx = await factory.deployDoNFT(
    "Test DoNFT",
    "TDNFT",
    await mockNFT.getAddress(),
    owner.address,
    admin.address,
    users[1].address,
    "game12" 
  );

  // Wait for deployment and get proxy address
  const receipt = await deployTx.wait();
  
  // Add debug logging to understand the receipt structure
  console.log("Transaction receipt:", {
    status: receipt.status,
    events: receipt.events ? receipt.events.length : 'no events'
  });

  // More defensive event finding
  let proxyAddress;
  
  if (receipt.events) {
    const deployEvent = receipt.events.find(
      (e: any) => e && e.event === "DeployDoNFT"
    );
    
    if (deployEvent && deployEvent.args) {
      proxyAddress = deployEvent.args.proxy;
    }
  }

  // If we couldn't find the event, try looking in logs
  if (!proxyAddress && receipt.logs) {
    // Try to decode logs manually
    const factory = await ethers.getContractFactory("DoNFTFactory");
    const deployEventSignature = factory.interface.getEvent("DeployDoNFT").format();
    
    for (const log of receipt.logs) {
      try {
        const parsedLog = factory.interface.parseLog(log);
        if (parsedLog && parsedLog.name === "DeployDoNFT") {
          proxyAddress = parsedLog.args.proxy;
          break;
        }
      } catch (e) {
        // Skip logs that can't be parsed
        continue;
      }
    }
  }

  if (!proxyAddress) {
    throw new Error("Could not find proxy address in transaction events or logs");
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
    market: deployedMarket,
    factory,
    implementation,
    beacon,
    mockNFT
  };
}
