// server functions


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/properties')

const app = express();
const port = process.env.PORT || 4000; 
const url = process.env.MONGO_URI; // Update with the correct environment variable name

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' });
});

app.use('/api/properties', propertyRoutes);

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.log('Connected to MongoDB server. Listening on port: ' + port);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
