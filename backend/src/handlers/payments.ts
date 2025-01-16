import axios from "axios";
import { Router } from "express";
import platformAPIClient from "../services/platformAPIClient";
import "../types/session";

export default function mountPaymentsEndpoints(router: Router) {
  // Handle incomplete payment
  router.post('/incomplete', async (req, res) => {
    try {
      const payment = req.body.payment;
      const paymentId = payment.identifier;
      const txid = payment.transaction?.txid;
      const txURL = payment.transaction?._link;

      const app = req.app;
      const orderCollection = app.locals.orderCollection;
      const userId = req.session.currentUser?.uid;

      if (!userId) {
        return res.status(401).json({ message: "User must be logged in." });
      }

      // Check if the order exists
      const order = await orderCollection.findOne({ pi_payment_id: paymentId, user: userId });

      if (!order) {
        return res.status(404).json({ message: "Order not found for this user." });
      }

      // Verify the transaction on the Pi blockchain
      const horizonResponse = await axios.create({ timeout: 20000 }).get(txURL);
      const paymentIdOnBlock = horizonResponse.data.memo;

      if (paymentIdOnBlock !== order.pi_payment_id) {
        return res.status(400).json({ message: "Payment ID mismatch on blockchain." });
      }

      // Mark the order as paid and unlock features
      await orderCollection.updateOne(
        { pi_payment_id: paymentId },
        { $set: { txid, paid: true, updated_at: new Date() } }
      );

      // Notify Pi servers of completion
      await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, { txid });

      return res.status(200).json({ message: `Payment ${paymentId} processed successfully.` });
    } catch (error) {
      console.error("Error handling incomplete payment:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Approve current payment
  router.post('/approve', async (req, res) => {
    try {
      const userId = req.session.currentUser?.uid;

      if (!userId) {
        return res.status(401).json({ message: "User must be logged in." });
      }

      const app = req.app;
      const paymentId = req.body.paymentId;
      const currentPayment = await platformAPIClient.get(`/v2/payments/${paymentId}`);

      const orderCollection = app.locals.orderCollection;

      // Create an order record for premium service
      const subscriptionType = currentPayment.data.metadata.subscriptionType || "basic";

      await orderCollection.insertOne({
        pi_payment_id: paymentId,
        user: userId,
        subscription_type: subscriptionType,
        txid: null,
        paid: false,
        cancelled: false,
        created_at: new Date(),
      });

      // Notify Pi servers that approval is ready
      await platformAPIClient.post(`/v2/payments/${paymentId}/approve`);

      return res.status(200).json({ message: `Payment ${paymentId} approved.` });
    } catch (error) {
      console.error("Error approving payment:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Complete current payment
  router.post('/complete', async (req, res) => {
    try {
      const app = req.app;
      const paymentId = req.body.paymentId;
      const txid = req.body.txid;

      const orderCollection = app.locals.orderCollection;

      const order = await orderCollection.findOne({ pi_payment_id: paymentId });

      if (!order) {
        return res.status(404).json({ message: "Order not found." });
      }

      // Mark as paid and activate subscription
      await orderCollection.updateOne(
        { pi_payment_id: paymentId },
        { $set: { txid, paid: true, activated_at: new Date() } }
      );

      // Notify Pi servers that payment is complete
      await platformAPIClient.post(`/v2/payments/${paymentId}/complete`, { txid });

      // Business Logic: Activate user's premium services
      activateUserPremium(order.user, order.subscription_type);

      return res.status(200).json({ message: `Payment ${paymentId} completed.` });
    } catch (error) {
      console.error("Error completing payment:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Cancelled payment
  router.post('/cancelled_payment', async (req, res) => {
    try {
      const app = req.app;
      const paymentId = req.body.paymentId;

      const orderCollection = app.locals.orderCollection;

      // Mark the order as cancelled
      await orderCollection.updateOne(
        { pi_payment_id: paymentId },
        { $set: { cancelled: true, updated_at: new Date() } }
      );

      return res.status(200).json({ message: `Payment ${paymentId} cancelled.` });
    } catch (error) {
      console.error("Error cancelling payment:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  // Activate user premium (helper function)
  async function activateUserPremium(userId: string, subscriptionType: string) {
    // Logic to activate premium services for the user in the Tru2u system
    console.log(`Activating ${subscriptionType} for user ${userId}`);
    // Implement your database or API logic here
  }
}