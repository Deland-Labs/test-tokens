import { ethers } from "hardhat";

const main = async () => {
  const [owner] = await ethers.getSigners();
  const Erc20Test = await ethers.getContractFactory("Erc20Test");

  console.log("owner", owner.address);

  const tet1 = await Erc20Test.deploy("Test Eth Sepolia Token1", "TET1");
  await tet1.waitForDeployment();
  console.log("TeT1 address", tet1.target);

  const tet2 = await Erc20Test.deploy("Test Eth Sepolia Token2", "TET2");
  await tet2.waitForDeployment();
  console.log("TeT2 address", tet2.target);
};

main();
