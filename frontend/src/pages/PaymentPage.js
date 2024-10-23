import React, { useState } from 'react';
import axios from 'axios';

function PaymentPage() {
  const [walletAddress, setWalletAddress] = useState('');
  const [amount, setAmount] = useState(0);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/payment', { walletAddress, amount });
      alert(response.data.message);
    } catch (error) {
      alert('Payment failed');
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Wallet Address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Pay with Pi</button>
      </form>
    </div>
  );
}

export default PaymentPage;
