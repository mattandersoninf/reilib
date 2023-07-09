/*properties.js
User server functions to modify properites on the webapp
*/

/* endpoints

1. GET ALL- grab information from the database
2. POST - create new inforamtion in the databse
3. GET - grab a single pice of inforamtion from the databsae
4. DELETE - remove inforamtion from the database
5. PATCH - update inforamtion in the database

*/

require('dotenv').config()

const express = require('express')
const Property = require('../models/propertyModel')

const router = express.Router()

/*
// TEST ROUTES
router.get('/', (req,res) => {
    res.json({mssg:'GET all properties'})
})

router.get('/:id', (req,res) => {
    res.json({mssg:'GET a single propertY'})
})

router.delete('/:id', (req,res) => {
    res.json({mssg:'DELETE a property'})
})

router.patch('/:id', (req,res) => {
    res.json({mssg:'UPDATE a property'})
})
*/


//GET ALL properties
router.get('/', (req, res) => {
    // Get properties collection
    const propertiesCollection = db.collection('properties');

    // Find all properties
    propertiesCollection.find().toArray((err, properties) => {
      if (err) {
        console.error('Error fetching properties:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      res.json(properties);
    });
  });

//GET a single property
router.get('/:id', (req,res) => {
    
    // const {ListingId, StreetNumber, StreetName, Sity, StateOrProvince, PostalCode, ListPrice, LivingArea, BedroomsTotal, BathroomsTotalDecimal} = req.body

    res.json({mssg:"GET a single property"})
})

// POST a property
router.post('/', async(req,res) =>{

    const {ListingId, StreetNumber, StreetName, Sity, StateOrProvince, PostalCode, ListPrice, LivingArea, BedroomsTotal, BathroomsTotalDecimal} = req.body

    try{
        const property = await Property.create({ListingId, StreetNumber, StreetName, Sity, StateOrProvince, PostalCode, ListPrice, LivingArea, BedroomsTotal, BathroomsTotalDecimal})
        res.status(200).json(property)
    } catch (error){
        console.log('Error posting to server:'+error.message)
        res.status(400).json({error: error.message})
    }

    res.json({mssg:"POST a property"})
})

// DELETE a property
router.delete('/:id', (req,res) => {
    res.json({mssg:"DELETE a property"})
})

//UPDATE a property
router.patch('/id', (req,res) => {
    res.json({mssg:"GET all properties"})
})


module.exports = router