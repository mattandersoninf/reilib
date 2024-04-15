
/* server.js

express server functions

*/


require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const propertyRoutes = require('./routes/properties')
const userRoutes = require('./routes/user')
const analysesRoutes = require('./routes/analysisRoute')

const app = express();
const port = process.env.PORT || 4000; 
const url = process.env.MONGO_URI; // Update with the correct environment variable name

app.use(express.json());

app.use((req, res, next) => {
  next();
});


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the app' });
});

// routes
// properties route
app.use('/api/properties', propertyRoutes);
// users route
app.use('/api/users', userRoutes)
// analyses route
app.use('/api/analyses', analysesRoutes);

//connect to mongodb
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    app.listen(port, () => {
      console.log('Connected to MongoDB server. Listening on port: ' + port);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
