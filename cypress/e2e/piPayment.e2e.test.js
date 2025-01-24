require("dotenv").config({ path: ".env.test" }); // Test-specific environment variables
const { PiNetwork } = require("pi-network-sdk"); // Pi SDK
const fetch = require("node-fetch"); // Or any HTTP client for backend interactions

// Initialize Pi Network
const apiKey = process.env.PI_API_KEY;
const walletPrivateSeed = process.env.WALLET_PRIVATE_SEED;
const pi = new PiNetwork();
pi.initialize(apiKey, walletPrivateSeed, "Pi Testnet");

// Test Suite
describe("E2E: Pi Payment Backend Workflow", () => {
  let paymentId;
  let txid;

  beforeAll(() => {
    console.log("Starting Pi Network E2E tests...");
  });

  afterAll(() => {
    console.log("E2E tests completed.");
  });

  test("should create a payment successfully", async () => {
    const paymentData = {
      amount: 3.14,
      memo: "E2E Test Payment",
      metadata: { orderId: "test-order-12345" },
      uid: "test-uid",
    };

    paymentId = await pi.createPayment(paymentData); // Pi API call
    expect(paymentId).toBeDefined();
    console.log(`Payment created successfully: ${paymentId}`);
  });

  test("should submit the payment successfully", async () => {
    txid = await pi.submitPayment(paymentId, false); // Submit payment on testnet
    expect(txid).toBeDefined();
    console.log(`Payment submitted successfully: txid = ${txid}`);
  });

  test("should complete the payment successfully", async () => {
    const payment = await pi.completePayment(paymentId, txid); // Complete the payment
    expect(payment).toHaveProperty("status", "completed");
    console.log("Payment completed successfully:", payment);
  });

  test("should throw an error for invalid payment creation", async () => {
    const invalidPaymentData = {
      amount: 0, // Invalid amount
      memo: "Invalid Test Payment",
      metadata: {},
      uid: "test-uid",
    };

    await expect(pi.createPayment(invalidPaymentData)).rejects.toThrow("Invalid amount");
    console.log("Error case handled correctly for invalid payment.");
  });
});
