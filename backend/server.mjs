// Importing necessary modules
import express from "express";
import admin from "firebase-admin";
import { transaction, userData } from "./controllers.mjs";

// Import the service account key
const serviceAccount = "./spit-5b840-firebase-adminsdk-h59x8-e98e98d960.json";

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Create an Express app
const app = express();
const port = 5000; // or your desired port

app.use(express.json());

// Define a sample endpoint
app.get("/api/sample", (req, res) => {
  res.json({ message: "Hello, this is a sample endpoint!" });
});

// Define an endpoint that interacts with Firestore
app.post("/addUserData", userData);

app.post("/transfer", transaction);

app.get("/gettransfer/:uuid", async (req, res) => {
  try {
    const uuid = req.params.uuid;

    if (!uuid) {
      return res.status(400).json({ error: "UUID is required." });
    }

    const db = admin.firestore();
    const usersRef = db.collection("transaction");

    // Query Firestore based on the 'uuid' field
    const snapshot = await usersRef.where("uuid", "==", uuid).get();

    if (snapshot.empty) {
      return res.status(404).json({ error: "User not found." });
    }

    // Assuming there is only one user with the specified UUID
    const userData = snapshot.docs[0].data();
    res.json(userData);
  } catch (error) {
    console.error("Error retrieving user data from Firestore:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
