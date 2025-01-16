const express = require('express');
const { createPayment, getUserPayments } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', protect, createPayment);
router.get('/', protect, getUserPayments);

module.exports = router;
