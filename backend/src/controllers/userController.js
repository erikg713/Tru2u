const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const { initiatePiPayment } = require('../services/paymentService');

// Register User
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

// Login User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

// Initiate Payment using Pi Network
const initiatePayment = async (req, res) => {
    const { walletAddress, amount } = req.body;
    try {
        const paymentResult = await initiatePiPayment(walletAddress, amount);
        if (paymentResult.success) {
            res.json({ message: 'Payment successful' });
        } else {
            res.status(400).json({ error: 'Payment failed' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error processing payment' });
    }
};

module.exports = { registerUser, loginUser, initiatePayment };
