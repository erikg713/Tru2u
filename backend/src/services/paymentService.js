const axios = require('axios');
const { PI_API_KEY } = require('../config');

// Initiate Pi Network Payment
const initiatePiPayment = async (walletAddress, amount) => {
    try {
        const response = await axios.post('https://api.minepi.com/v2/payments', {
            walletAddress,
            amount,
            currency: 'PI',
        }, {
            headers: {
                'Authorization': `Bearer ${PI_API_KEY}`,
            }
        });

        return { success: response.data.success, paymentId: response.data.paymentId };
    } catch (error) {
        console.error('Payment Error:', error);
        return { success: false };
    }
};

module.exports = { initiatePiPayment };
