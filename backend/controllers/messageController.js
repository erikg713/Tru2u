const Message = require('../models/Message');

// Create a new message
exports.createMessage = async (req, res) => {
  try {
    const { sender, recipient, text, roomId } = req.body;
    const newMessage = await Message.create({ sender, recipient, text, roomId });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: 'Error creating message', error: err.message });
  }
};

// Get messages by room
exports.getMessagesByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const messages = await Message.find({ roomId }).populate('sender recipient');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching messages', error: err.message });
  }
};
