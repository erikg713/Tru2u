const express = require('express');
const { createMessage, getMessagesByRoom } = require('../controllers/messageController');

const router = express.Router();

// CRUD Endpoints
router.post('/', createMessage); // Create message
router.get('/room/:roomId', getMessagesByRoom); // Get messages by room ID

module.exports = router;
const { getChatHistory } = require('../controllers/messageController');
router.get('/history/:user1/:user2', getChatHistory);
