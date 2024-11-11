import { ethers } from "hardhat";
import { Erc20Test } from "../typechain-types";

const main = async () => {
  const Erc20Test = await ethers.getContractFactory("Erc20Test");
  const tst1Address = "0x78c19a21AAA0814B58707Ac49a8DE2C99c0545A6";
  const tst2Address = "0x073f878331bE56025EaEF459cE7D0C756dA2f6c5";
  const destAddress = "";
  const transferAmount = ethers.parseEther("1000000");

  const tst1 = Erc20Test.attach(tst1Address) as Erc20Test;
  const tst2 = Erc20Test.attach(tst2Address) as Erc20Test;

  await tst1.transfer(destAddress, transferAmount);
  await tst2.transfer(destAddress, transferAmount);
};

main();
