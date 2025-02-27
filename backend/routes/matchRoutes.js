const express = require("express");
const { findMatches } = require("../controllers/matchController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/matches", protect, findMatches);

module.exports = router;
