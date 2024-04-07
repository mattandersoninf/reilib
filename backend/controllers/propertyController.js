/* propertyController.js

This file will contain all of the functions that allow you to
interact with the mongodb database via the webpage and leveraging
the routes established. It's not part of the routes file for the 
sake of organization. 


*/

const Property = require('../models/propertyModel')
const mongoose = require('mongoose')

// get all properties

const getProperties = async(req,res) => {
    //return all of the properties in the db sorted by last created date
    const properties = await Property.find({}).sort({createdAt: -1})

    res.status(200).json(properties)
}

// get a single property
const getProperty = async (req, res) => {
    try {
      // Grab your search parameters
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid property ID.' });
      }
  
      // Search for the intended property given the parameters
      const property = await Property.findById(id);
  
      if (!property) {
        return res.status(404).json({ error: 'Property not found.' });
      }
  
      res.status(200).json(property);
    } catch (error) {
      console.error('Error retrieving property:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };


// create a new property
const createProperty = async (req, res) => {
  
    const {
        StreetNumber,
        StreetName,
        City, 
        StateOrProvince, 
        PostalCode, 
        ListPrice, 
        LivingArea, 
        BedroomsTotal, 
        BathroomsTotalDecimal
     } = req.body

    // handle empty fields
    let emptyFields = [];

    if(!StreetNumber){
      emptyFields.push('StreetNumber');
    }

    if(!StreetName){
      emptyFields.push('StreetName')
    }

    if(!City){
      emptyFields.push('City')
    }
    
    if(!StateOrProvince){
      emptyFields.push('StateOrProvince')
    }

    if(!PostalCode){
      emptyFields.push('PostalCode')
    }

    if(!ListPrice){
      emptyFields.push('ListPrice')
    }

    if(!LivingArea){
      emptyFields.push('LivingArea')
    }
    
    if(!BedroomsTotal){
      emptyFields.push('BedroomsTotal')
    }

    if(!BathroomsTotalDecimal){
      emptyFields.push('BathroomsTotalDecimal')
    }
    
    if(emptyFields. length > 0){
      return res.status(400).json({error:'Please fill in all fields.', emptyFields})
    }



    // add doc to db

    try{
      const property = await Property.create({
          StreetNumber, 
          StreetName, 
          City, 
          StateOrProvince, 
          PostalCode, 
          ListPrice, 
          LivingArea, 
          BedroomsTotal, 
          BathroomsTotalDecimal})
      res.status(200).json(property)
    } catch (error){
        console.log('Error posting to server:'+error.message)
        res.status(400).json({error: error.message})
    }

}

// delete a property
const deleteProperty = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid property ID.' })
      }
  
      const property = await Property.findOneAndDelete({ _id: id })
  
      if (!property) {
        return res.status(404).json({ error: 'Property not found.' })
      }
  
      res.status(200).json(property);
    } catch (error) {
      console.error('Error deleting property:', error);
      res.status(500).json({ error: 'Internal Server Error' })
    }
}


// update a property
const updateProperty = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Invalid property ID.' });
      }
  
      const allowedFields = [
            'StreetNumber', 
            'StreetName', 
            'City', 
            'StateOrProvince', 
            'PostalCode', 
            'ListPrice', 
            'LivingArea', 
            'BedroomsTotal', 
            'BathroomsTotalDecimal'
        ];
    const updates = {};

    // Apply updates only for allowed fields
    for (const field of Object.keys(req.body)) {
      if (allowedFields.includes(field)) {
        updates[field] = req.body[field];
      }
    }
  
      if (Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No valid fields to update.' });
      }
  
      const property = await Property.findOneAndUpdate({ _id: id }, updates, {
        new: true,
      });
  
      if (!property) {
        return res.status(404).json({ error: 'Property not found.' });
      }
  
      res.status(200).json(property);
    } catch (error) {
      console.error('Error updating property:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



module.exports = {
    getProperties,
    getProperty,
    createProperty,
    deleteProperty,
    updateProperty
}