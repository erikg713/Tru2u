const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, // Optional for group chats
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  roomId: { type: String, required: false }, // Optional for chatrooms
});

module.exports = mongoose.model('Message', MessageSchema);
