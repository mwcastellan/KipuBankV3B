// src/kipuBank.service.js
const { ethers } = require("ethers");
const { wallet, kipuAddress } = require("./config.js");
const artifact = require("../abi/KipuBankV3.json");
const abi = artifact.abi;   // <-- Esto es lo único válido

const contract = new ethers.Contract(kipuAddress, abi, wallet);

module.exports = {
  async getBankCap() {
    return await contract.bankCap();
  },

  async balanceOf(user) {
    return await contract.balanceOfUsdc(user);
  },

  async depositEth(amountEth, minUsdcOut) {
    const tx = await contract.depositETH(minUsdcOut, {
      value: ethers.parseEther(amountEth)
    });
    return tx.wait();
  },

  async withdrawUsdc(amount) { 
    const tx = await contract.withdrawUsdc(amount);
    return tx.wait();
  }
};
