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

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
