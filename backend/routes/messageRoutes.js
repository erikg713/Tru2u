const express = require('express');
const { createMessage, getMessagesByRoom } = require('../controllers/messageController');

const router = express.Router();

// CRUD Endpoints
router.post('/', createMessage); // Create message
router.get('/room/:roomId', getMessagesByRoom); // Get messages by room ID

module.exports = router;
