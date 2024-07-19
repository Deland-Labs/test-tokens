import { ethers } from "hardhat";
import { Erc20Test } from "../typechain-types";

const main = async () => {
  const Erc20Test = await ethers.getContractFactory("Erc20Test");
  const tet1Address = "0x4648Ae2b3610976065b20999e23F00553CA4C108";
  const tet2Address = "0x9A6D6999FA394EA0d11e5682372A76e4B38C2DB5";
  const destAddress = "";
  const transferAmount = ethers.parseEther("1000000");

  const tet1 = Erc20Test.attach(tet1Address) as Erc20Test;
  const tet2 = Erc20Test.attach(tet2Address) as Erc20Test;

  await tet1.transfer(destAddress, transferAmount);
  await tet2.transfer(destAddress, transferAmount);
};

main();
