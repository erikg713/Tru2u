const User = require('../models/User');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { username, uid, password } = req.body;
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ username, uid, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err.message });
  }
};

// Get a user by UID
exports.getUserByUid = async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await User.findOne({ uid });
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
};

// Update a user's roles
exports.updateUserRoles = async (req, res) => {
  try {
    const { uid } = req.params;
    const { roles } = req.body;

    const updatedUser = await User.findOneAndUpdate({ uid }, { roles }, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const { uid } = req.params;

    const deletedUser = await User.findOneAndDelete({ uid });
    if (!deletedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user', error: err.message });
  }
};
