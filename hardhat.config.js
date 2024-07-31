require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    hardhat:{
      chainId:31337,

    },
    localhost:{
      url:"http://127.0.0.1:8545"
    }
  },
  paths:{
    artifacts:"./crowdfund/src/artifacts"
  },
};
