const hre = require("hardhat");

const main = async () => {
  console.log("Starting deployment...");
  
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  console.log("Contract factory created");
  
  const transactions = await Transactions.deploy();
  console.log("Contract deployed, waiting for confirmation...");

  await transactions.waitForDeployment();
  
  const contractAddress = await transactions.getAddress();
  console.log("Transactions contract deployed to:", contractAddress);
  
  return contractAddress;
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
