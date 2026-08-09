const express = require("express");

const router = express.Router();

const {
  saveGrowSmart,
  getGrowSmartHistory,
} = require("../controllers/growSmartController");

router.post("/", saveGrowSmart);

router.get("/", getGrowSmartHistory);

module.exports = router;