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
