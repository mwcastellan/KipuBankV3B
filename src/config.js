// src/config.js
require("dotenv").config();
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

module.exports = {
  provider,
  wallet,
  kipuAddress: process.env.KIPUBANK_ADDRESS
};
