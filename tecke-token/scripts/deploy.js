  
const hre = require("hardhat");

async function main() {
  const TeckeToken = await hre.ethers.getContractFactory("TeckeToken");
  const teckeToken = await TeckeToken.deploy(100000000, 50);

  await teckeToken.deployed();

  console.log("Your token is deployed, here is your contract address: ", teckeToken.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});