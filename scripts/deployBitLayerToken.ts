import { ethers } from "hardhat";

const main = async () => {
  const [owner] = await ethers.getSigners();
  const Erc20Test = await ethers.getContractFactory("Erc20Test");

  console.log("owner", owner.address);

  const tblt1 = await Erc20Test.deploy("Test BitLayer Token1", "TBLT1");
  await tblt1.waitForDeployment();
  console.log("TBLT1 address", tblt1.target);

  const tblt2 = await Erc20Test.deploy("Test BitLayer Token2", "TBLT2");
  await tblt2.waitForDeployment();
  console.log("TBLT2 address", tblt2.target);
};

main();
