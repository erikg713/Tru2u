const express = require('express');
const { registerUser, loginUser, initiatePayment } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/payment', initiatePayment);

module.exports = router;
