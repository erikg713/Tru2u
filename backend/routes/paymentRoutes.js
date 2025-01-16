const express = require('express');
const { createPayment, getUserPayments } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();
const express = require('express');
const { createPayment, getPaymentsByUser } = require('../controllers/paymentController');

const router = express.Router();

// CRUD Endpoints
router.post('/', createPayment); // Create payment
router.get('/:userId', getPaymentsByUser); // Get payments by user ID

module.exports = router;
router.post('/', protect, createPayment);
router.get('/', protect, getUserPayments);

module.exports = router;
const { paymentWebhook } = require('../controllers/paymentController');
router.post('/webhook', paymentWebhook);
