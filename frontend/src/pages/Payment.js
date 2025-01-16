import React, { useState } from 'react';
import API from '../services/api';

const Payment = () => {
  const [paymentData, setPaymentData] = useState({ pi_payment_id: '', amount: 0 });

  const handlePayment = async () => {
    try {
      const { data } = await API.post('/payments', paymentData);
      alert(`Payment created with ID: ${data.pi_payment_id}`);
    } catch (err) {
      console.error(err.message);
      alert('Payment creation failed.');
    }
  };

  return (
    <div>
      <h2>Payment</h2>
      <input
        type="text"
        placeholder="Payment ID"
        onChange={(e) => setPaymentData({ ...paymentData, pi_payment_id: e.target.value })}
      />
      <input
        type="number"
        placeholder="Amount"
        onChange={(e) => setPaymentData({ ...paymentData, amount: parseFloat(e.target.value) })}
      />
      <button onClick={handlePayment}>Submit Payment</button>
    </div>
  );
};

export default Payment;
