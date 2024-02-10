const firebase = require('firebase/app');
require('firebase/database');
const database = firebase.database();

export const userData = (req, res) => {
    const { name, email, age } = req.body;
  
    const database = firebase.database();
    const userDataRef = database.ref('/userData');
  
    // Generate a new unique key for the data
    const newUserDataRef = userDataRef.push();
  
    // Set the data in the new key
    newUserDataRef.set({
      name: name,
      email: email,
      age: age
    })
    .then(() => {
      return res.status(200).json({ message: 'Data added successfully!' });
    })
    .catch((error) => {
      console.error('Error adding data:', error);
      return res.status(500).json({ error: 'Internal server error' });
    });
}

export default app();