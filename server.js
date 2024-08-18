const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authMiddleware = require('./authMiddleware');
const UserModel = require('./userModel');
const upload = require('./imageUpload'); // Import image upload middleware
const { MongoClient } = require('mongodb'); // Import MongoDB client

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));


// MongoDB connection string and database name
const uri = process.env.MONGODB_URI;
const dbName = uri ? uri.split('/').pop() : ''; // Extract database name from URI

// Handle contact form submission
app.post('/api/contact', upload.single('profilePicture'), async (req, res) => {
    try {
        // Extract form data from request body
        const { fullName, email, mobileNumber, emailSubject, message } = req.body;
        const profilePicture = req.file ? req.file.path : ''; // Get the file path of the uploaded profile picture

        // Connect to MongoDB
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(dbName);

        // Specify the collection name
        const collection = db.collection('contacts');

        // Create a new contact document with the form data
        const newContact = {
            fullName,
            email,
            mobileNumber,
            emailSubject,
            message,
            profilePicture
        };

        // Insert the contact document into the database
        await collection.insertOne(newContact);

        // Close the MongoDB connection
        await client.close();

        // Respond with a success message
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
