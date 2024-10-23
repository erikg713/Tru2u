const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileCompleted: {
        type: Boolean,
        default: false,
    },
    walletAddress: {
        type: String,
        unique: true,
        sparse: true,
    },
    piBalance: {
        type: Number,
        default: 0,
    }
});

module.exports = mongoose.model('User', userSchema);
