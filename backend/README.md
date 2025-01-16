 Full Project Directory Structure

Here’s a proposed directory structure:

/tru2u
  /backend
    /controllers
      - userController.js
      - paymentController.js
    /middlewares
      - authMiddleware.js
    /models
      - User.js
      - Payment.js
    /routes
      - userRoutes.js
      - paymentRoutes.js
    - server.js
    - .env
  /frontend
    /src
      /components
        - Navbar.js
        - Profile.js
        - Chat.js
        - Payment.js
      /pages
        - Home.js
        - SignIn.js
        - SignUp.js
      /services
        - api.js
      - App.js
      - index.js
    - .env
  README.md


---

🎯 2. Backend: Optimized Node.js + Express

Backend Setup

a. Initialize the backend

Run the following commands:

mkdir backend
cd backend
npm init -y
npm install express mongoose dotenv cors bcryptjs jsonwebtoken body-parser
npm install nodemon --save-dev

b. Configuration: .env file

Create a .env file to store sensitive information:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PI_API_KEY=your_pi_network_api_key

c. Backend Core Code

server.js:

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


---

User Model

models/User.js:

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  uid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  createdAt: { type: Date, default: Date.now },
});

// Encrypt password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Password comparison
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);


---

Auth Middleware

middlewares/authMiddleware.js:

const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = { protect };


---

User Routes and Controller

routes/userRoutes.js:

const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;

controllers/userController.js:

const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

const registerUser = async (req, res) => {
  const { username, uid, password } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ username, uid, password });
    res.status(201).json({
      _id: user.id,
      username: user.username,
      token: generateToken(user.id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };


---

🎯 3. Frontend: Optimized React App

Frontend Setup:

Run the following:

npx create-react-app tru2u-frontend
cd tru2u-frontend
npm install axios react-router-dom @mui/material

React Code Snippets

API Service (services/api.js):


import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const user = localStorage.getItem('user');
  if (user) req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  return req;
});

export default API;

Authentication (SignIn.js):


import React, { useState } from 'react';
import API from '../services/api';

const SignIn = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    try {
      const { data } = await API.post('/users/login', formData);
      localStorage.setItem('user', JSON.stringify(data));
      alert('Login successful!');
    } catch (err) {
      console.error(err.message);
      alert('Login failed.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignIn;


---

Let me know which part you'd like to expand on next: payments, chat system, or further optimizations! 🚀

