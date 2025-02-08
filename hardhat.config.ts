import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    sepolia: {
      url: "https://newest-bitter-silence.ethereum-sepolia.quiknode.pro/326ecaa8e4d1a2f0e90d08450c4f30900c050d09", // Or Infura
      accounts: ["8073c38a67accdc4e205ae78d4b47c2ede1b8d8598a7134a75947f53a06f7802"]
    }
  },
  solidity: "0.8.28",
};

export default config;