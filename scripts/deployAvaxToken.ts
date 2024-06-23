import { ethers } from "hardhat";

const main = async () => {
  const [owner] = await ethers.getSigners();
  const Erc20Test = await ethers.getContractFactory("Erc20Test");

  console.log("owner", owner.address);

  const tst1 = await Erc20Test.deploy("Test Aavx Token1", "TAT1");
  await tst1.waitForDeployment();
  console.log("TAT1 address", tst1.target);

  const tst2 = await Erc20Test.deploy("Test Aavx Token2", "TAT2");
  await tst2.waitForDeployment();
  console.log("TAT2 address", tst2.target);
};

main();
