const { ethers } = require("hardhat");

async function main() {
  try {
    // Get the contract factory
    const Contract = await ethers.getContractFactory("Test9");
    const abi = Contract.interface.format("json");

    console.log("Contract ABI:", JSON.stringify(abi, null, 2));
    // Deploy the contract
    console.log("Deploying contract...");
    const contract = await Contract.deploy();
    console.log("Contract deployed to address:", contract);
    
    // Exit the process
    process.exit(0);
  } catch (error) {
    // Handle errors
    console.error("Error deploying contract:", error);
    process.exit(1);
  }
}

main();
