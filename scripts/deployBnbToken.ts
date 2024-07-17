import { ethers } from "hardhat";

const main = async () => {
  const [owner] = await ethers.getSigners();
  const Erc20Test = await ethers.getContractFactory("Erc20Test");

  console.log("owner", owner.address);

  const tbnt1 = await Erc20Test.deploy("Test BNB Token1", "TBNT1");
  await tbnt1.waitForDeployment();
  console.log("TBNT1 address", tbnt1.target);

  const tbnt2 = await Erc20Test.deploy("Test BNB Token2", "TBNT2");
  await tbnt2.waitForDeployment();
  console.log("TBNT2 address", tbnt2.target);
};

main();
