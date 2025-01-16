const Payment = require('../models/Payment');

exports.createPayment = async (req, res) => {
  const { pi_payment_id, amount } = req.body;

  try {
    const payment = await Payment.create({
      pi_payment_id,
      userId: req.user.id,
      amount,
    });

    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getUserPayments = async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const Payment = require('../models/Payment');

// Create a new payment
exports.createPayment = async (req, res) => {
  try {
    const { userId, pi_payment_id, amount } = req.body;
    const newPayment = await Payment.create({ userId, pi_payment_id, amount });
    res.status(201).json(newPayment);
  } catch (err) {
    res.status(500).json({ message: 'Error creating payment', error: err.message });
  }
};

// Get all payments for a user
exports.getPaymentsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.find({ userId });
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments', error: err.message });
  }
};
