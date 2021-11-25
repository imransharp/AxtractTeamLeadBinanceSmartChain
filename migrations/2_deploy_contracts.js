const AXTToken = artifacts.require("AXTToken.sol");

module.exports = function (deployer) {
  deployer.deploy(AXTToken);
};
