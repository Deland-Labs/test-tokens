import { ethers } from "hardhat";
import { Erc20Test } from "../typechain-types";

const main = async () => {
  const Erc20Test = await ethers.getContractFactory("Erc20Test");
  const tat1Address = "0xA985324D555A20A17e12355A0eEacf39C77bcF95";
  const tat2Address = "0x692651057f0969b16Df34dC49Eb372a6765Ed6e0";
  const destAddress = "";
  const transferAmount = ethers.parseEther("1000000");

  const tat1 = Erc20Test.attach(tat1Address) as Erc20Test;
  const tat2 = Erc20Test.attach(tat2Address) as Erc20Test;

  await tat1.transfer(destAddress, transferAmount);
  //await tat2.transfer(destAddress, transferAmount);
};

main();
