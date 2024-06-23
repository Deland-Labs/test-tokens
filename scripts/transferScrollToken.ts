import { ethers } from "hardhat";
import { Erc20Test } from "../typechain-types";

const main = async () => {
  const Erc20Test = await ethers.getContractFactory("Erc20Test");
  const tst1Address = "0x79273EecafaC25276872245fBaF007344747d4BA";
  const tst2Address = "0x2A91720dd2BEc1d561a99549E03d678c959A5957";
  const destAddress = "";
  const transferAmount = ethers.parseEther("1000000");

  const tst1 = Erc20Test.attach(tst1Address) as Erc20Test;
  const tst2 = Erc20Test.attach(tst2Address) as Erc20Test;

  await tst1.transfer(destAddress, transferAmount);
  await tst2.transfer(destAddress, transferAmount);
};

main();
