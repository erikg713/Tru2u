class PiNetwork {
  initialize(apiKey, walletPrivateSeed, environment) {
    this.apiKey = apiKey;
    this.walletPrivateSeed = walletPrivateSeed;
    this.environment = environment;
  }

  async createPayment(paymentData) {
    if (paymentData.amount <= 0) throw new Error("Invalid amount");
    return "mock-payment-id";
  }

  async submitPayment(paymentId, isMainnet) {
    if (!paymentId) throw new Error("Invalid paymentId");
    return "mock-txid";
  }

  async completePayment(paymentId, txid) {
    if (!paymentId || !txid) throw new Error("Invalid payment or transaction");
    return { status: "completed", paymentId, txid };
  }
}

module.exports = { PiNetwork };
