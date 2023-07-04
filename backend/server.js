// mongodb server functions

//test comment* 

require("dotenv").config

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'house_prices';

/*
// Connect to MongoDB server
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB server');

  const db = client.db(dbName);

  // Define routes
  app.get('/houses', (req, res) => {
    // Get houses collection
    const housesCollection = db.collection('houses');

    // Find all houses
    housesCollection.find().toArray((err, houses) => {
      if (err) {
        console.error('Error fetching houses:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.json(houses);
    });
  });

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${port}`);
  });
});
*/