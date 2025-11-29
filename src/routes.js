// src/routes.js
const express = require("express");
const router = express.Router();
const kipu = require("./kipuBank.service");

// GET /balance/:address
router.get("/balance/:address", async (req, res) => {
  try {
    const { address } = req.params;
    const balance = await kipu.balanceOf(address);
    res.json({ address, balance: balance.toString() });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /deposit-eth
router.post("/deposit-eth", async (req, res) => {
  try {
    const { amountEth, minUsdcOut } = req.body;
    const receipt = await kipu.depositEth(amountEth, minUsdcOut);
    res.json({ status: "ok", receipt });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /withdraw
router.post("/withdraw", async (req, res) => {
  try {
    const { amount } = req.body;
    const receipt = await kipu.withdrawUsdc(amount);
    res.json({ status: "ok", receipt });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
