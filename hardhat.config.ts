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
    ethSepoliaTest: {
      url: "https://eth-sepolia.api.onfinality.io/public",
      accounts: [PRIVATE_KEY],
    },
    scrollSepoliaTest: {
      url: "https://sepolia-rpc.scroll.io/",
      accounts: [PRIVATE_KEY],
    },
    avaxFuji: {
      url: "https://rpc.ankr.com/avalanche_fuji",
      accounts: [PRIVATE_KEY],
    },
    bitLayerTestnet: {
      url: "https://testnet-rpc.bitlayer.org",
      accounts: [PRIVATE_KEY],
    },
    bscTest: {
      url: "https://data-seed-prebsc-2-s1.bnbchain.org:8545",
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: {
      bsc: "",
    },
  },
};

export default config;
