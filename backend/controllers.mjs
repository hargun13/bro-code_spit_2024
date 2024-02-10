// import firebase from 'firebase/compat/app'; // Import the 'compat' version for backward compatibility
import 'firebase/compat/database'; // Import the 'compat' version for backward compatibility
import admin from 'firebase-admin';

export const userData = async (req, res) => {
  try {
    const { name, email } = req.body; // Extract 'name' and 'email' from the request body

    const user = {
      name: name,
      email: email,
    }

    const db = admin.firestore();
    const collectionRef = db.collection('user'); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(user);

    res.json({ message: 'Data inserted successfully!', docId: docRef.id });
  } catch (error) {
    console.error('Error inserting data into Firestore:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const transaction = async (req, res) => {
  try {
    const { uuid, amonut, date_Time, recEmail, senderEmail } = req.body; // Extract 'name' and 'email' from the request body

    const transaction_data = {
      uuid: uuid,
      amonut: amonut,
      date_Time: date_Time,
      recEmail: recEmail,
      senderEmail: senderEmail,
    }

    const db = admin.firestore();
    const collectionRef = db.collection('transaction'); // Replace with your actual collection name

    // Insert 'name' and 'email' into Firestore
    const docRef = await collectionRef.add(transaction_data);

    res.json({ message: 'Data inserted successfully!', docId: docRef.id });
  } catch (error) {
    console.error('Error inserting data into Firestore:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

