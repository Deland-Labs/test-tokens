import { ethers } from "hardhat";
import { Erc20Test } from "../typechain-types";

const main = async () => {
  const Erc20Test = await ethers.getContractFactory("Erc20Test");
  const tblt1Address = "0x29b5e9271A181aef0dA690Dcd569958d7FA9f625";
  const tblt2Address = "0xd78D6FE32B59C98bde7CfD75D30Cd5CdE40bc1E8";
  const destAddress = "";
  const transferAmount = ethers.parseEther("1000000");

  const tblt1 = Erc20Test.attach(tblt1Address) as Erc20Test;
  const tblt2 = Erc20Test.attach(tblt2Address) as Erc20Test;

  await tblt1.transfer(destAddress, transferAmount);
  await tblt2.transfer(destAddress, transferAmount);
};

main();
