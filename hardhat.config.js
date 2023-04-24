require("@nomiclabs/hardhat-ethers");

const { mnemonic } = require("./secrets.json");

module.exports = {
  networks: {
    custom: {
      chainId: 91003,
      url: "https://api.evm.worlds.eclipsenetwork.xyz/solana",
      accounts: {
        mnemonic: mnemonic,
      },
    },
  },
  solidity: "0.8.3",
};
