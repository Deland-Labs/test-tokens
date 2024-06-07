import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import "dotenv/config";

const ETHERSCAN_MAINNET_API_KEY = process.env.ETHERSCAN_MAINNET_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  sourcify: {
    enabled: true,
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    scrollSepoliaTest: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [PRIVATE_KEY],
    } 
  },

  etherscan: {
    apiKey: {
      bsc: "",
    },
  },
};

export default config;
