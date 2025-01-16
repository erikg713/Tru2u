import { Router } from "express";
import platformAPIClient from "../services/platformAPIClient";

export default function mountUserEndpoints(router: Router) {
  // Sign in endpoint
  router.post('/signin', async (req, res) => {
    const auth = req.body.authResult;

    if (!auth || !auth.accessToken || !auth.user) {
      return res.status(400).json({ error: "Invalid authentication data" });
    }

    const userCollection = req.app.locals.userCollection;

    try {
      // Verify the user's access token using the platform's /me endpoint
      const me = await platformAPIClient.get(`/v2/me`, {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      });

      if (!me.data || me.data.uid !== auth.user.uid) {
        return res.status(401).json({ error: "Access token verification failed" });
      }

      let currentUser = await userCollection.findOne({ uid: auth.user.uid });

      if (currentUser) {
        // Update user record with the latest access token
        await userCollection.updateOne(
          { _id: currentUser._id },
          {
            $set: {
              accessToken: auth.accessToken,
              updatedAt: new Date(),
            },
          }
        );
      } else {
        // Insert a new user record
        const insertResult = await userCollection.insertOne({
          username: auth.user.username,
          uid: auth.user.uid,
          roles: auth.user.roles,
          accessToken: auth.accessToken,
          createdAt: new Date(),
        });

        currentUser = await userCollection.findOne(insertResult.insertedId);
      }

      // Save the user in the session
      req.session.currentUser = {
        uid: currentUser.uid,
        username: currentUser.username,
        roles: currentUser.roles,
      };

      return res.status(200).json({ message: "User signed in successfully", user: req.session.currentUser });
    } catch (err) {
      console.error("Sign-in error:", err.message);
      return res.status(500).json({ error: "Failed to verify access token or retrieve user data" });
    }
  });

  // Sign out endpoint
  router.get('/signout', (req, res) => {
    req.session.currentUser = null; // Clear the session
    res.clearCookie("connect.sid"); // Clear the session cookie
    return res.status(200).json({ message: "User signed out successfully" });
  });
}