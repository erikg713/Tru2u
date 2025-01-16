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
// Get Chat History Between Two Users
exports.getChatHistory = async (req, res) => {
  try {
    const { user1, user2 } = req.params;
    const messages = await Message.find({
      $or: [
        { sender: user1, recipient: user2 },
        { sender: user2, recipient: user1 },
      ],
    }).populate('sender recipient');

    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching chat history', error: err.message });
  }
};
