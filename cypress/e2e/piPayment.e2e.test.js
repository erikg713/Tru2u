require("dotenv").config({ path: ".env.test" }); // Load test-specific environment variables
const { PiNetwork } = require("pi-network-sdk");
const fetch = require("node-fetch");

// Initialize Pi Network SDK
const apiKey = process.env.PI_API_KEY;
const walletPrivateSeed = process.env.WALLET_PRIVATE_SEED;
const pi = new PiNetwork();
pi.initialize(apiKey, walletPrivateSeed, "Pi Testnet");

// E2E Test Suite
describe("E2E: Pi Payment System", () => {
  let paymentId;
  let txid;

  it("should create a payment successfully", async () => {
    const paymentData = {
      amount: 3.14,
      memo: "E2E Test Payment",
      metadata: { orderId: "order-12345" },
      uid: "test-uid",
    };

    paymentId = await pi.createPayment(paymentData); // Call actual Pi API
    expect(paymentId).toBeDefined();
    console.log(`Payment created: ${paymentId}`);
  });

  it("should submit the payment and return a transaction ID", async () => {
    txid = await pi.submitPayment(paymentId, false); // Submit the payment on the testnet
    expect(txid).toBeDefined();
    console.log(`Payment submitted: txid = ${txid}`);
  });

  it("should complete the payment", async () => {
    const payment = await pi.completePayment(paymentId, txid); // Complete the payment
    expect(payment).toHaveProperty("status", "completed");
    console.log("Payment completed:", payment);
  });

  it("should handle errors for invalid payments", async () => {
    try {
      await pi.createPayment({ amount: 0, memo: "Invalid Payment", metadata: {}, uid: "test-uid" });
    } catch (error) {
      expect(error.message).toMatch(/Invalid amount/);
      console.error("Handled error:", error.message);
    }
  });
});
