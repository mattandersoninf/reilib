// mongodb server functions

//test comment* 

/* API endpoints

1. GET ALL- grab information from the database
2. POST - create new inforamtion in the databse
3. GET - grab a single pice of inforamtion from the databsae
4. DELETE - remove inforamtion from the database
5. PATCH - update inforamtion in the database

*/


require('dotenv').config();

const express = require('express');
const propertyRoutes = require('./routes/properties')
const mongoose = require('mongoose');


const app = express();

// Connection URL and database name
const url = process.env.MONG_URI;
//const dbName = 'house_prices';

// middleware
//executes a task described in properties.js
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//routes 
app.get('/', (req, res) =>{
  res.json({mssg:'Welcome to the app'})
})

// routes
app.use('/api/properties', propertyRoutes)


// Connect to MongoDB server
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {

    app.listen(process.env.PORT, () =>{
      console.log('connected to db listening on port: '+process.env.PORT)
    })
    // Start performing database operations here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });


