import { ethers } from "hardhat";

const main = async () => {
  const [owner] = await ethers.getSigners();
  const Erc20Test = await ethers.getContractFactory("Erc20Test");

  console.log("owner", owner.address);

  const tat1 = await Erc20Test.deploy("Test Aavx Token1", "TAT1");
  await tat1.waitForDeployment();
  console.log("TAT1 address", tat1.target);

  const tat2 = await Erc20Test.deploy("Test Aavx Token2", "TAT2");
  await tat2.waitForDeployment();
  console.log("TAT2 address", tat2.target);
};

main();
