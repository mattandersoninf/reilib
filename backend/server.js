// mongodb server functions

//test comment* 

/* API endpoints

1. GET ALL- grab information from the database
2. POST - create new inforamtion in the databse
3. GET - grab a single pice of inforamtion from the databsae
4. DELETE - remove inforamtion from the database
5. PATCH - update inforamtion in the database

*/


require("dotenv").config

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;

// Connection URL and database name
const url = 'mongodb://localhost:27017';
const dbName = 'house_prices';


// middleware

//executes a task described in properties.js
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

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