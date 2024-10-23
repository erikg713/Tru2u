const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { connectDB } = require('./db');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use(authMiddleware);  // JWT Authentication middleware

// Routes
app.use('/api/users', userRoutes);

// Connect to Database
connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
