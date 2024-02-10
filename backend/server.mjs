// Importing necessary modules
import express from 'express';
import admin from 'firebase-admin';

// Import the service account key
const serviceAccount = './spit-5b840-firebase-adminsdk-h59x8-e98e98d960.json';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Create an Express app
const app = express();
const port = 3000; // or your desired port

app.use(express.json());

// Define a sample endpoint
app.get('/api/sample', (req, res) => {
  res.json({ message: 'Hello, this is a sample endpoint!' });
});

// Define an endpoint that interacts with Firestore
app.get('/addUserData', async (req, res) => {
  try {
    const db = admin.firestore();
    const collectionRef = db.collection('your_collection');
    const snapshot = await collectionRef.get();

    const data = [];
    snapshot.forEach(doc => {
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Firestore:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/insert-data', async (req, res) => {
  try {
    const { name, email } = req.body; // Extract 'name' and 'email' from the request body

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required for insertion.' });
    }

    const db = admin.firestore();
    const collectionRef = db.collection('user'); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add({
      name: name,
      email: email,
    });

    res.json({ message: 'Data inserted successfully!', docId: docRef.id });
  } catch (error) {
    console.error('Error inserting data into Firestore:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
