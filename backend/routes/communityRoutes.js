const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

const {
  joinCommunity,
  getMembers,
} = require("../controllers/communityController");

router.post(
  "/",
  upload.single("profileImage"),
  joinCommunity
);

router.get("/", getMembers);

module.exports = router;