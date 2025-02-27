const User = require("../models/User");

exports.findMatches = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const matches = await User.find({ gender: { $in: user.preferences } }).select("-password");
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
