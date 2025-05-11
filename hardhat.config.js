/**
* @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "hardhat", // ✅ Use local Hardhat blockchain
  networks: {
    hardhat: {},             // ✅ This is the default local blockchain
  },
};
