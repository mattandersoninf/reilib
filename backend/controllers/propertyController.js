const Property = require('../models/propertyModel')

// get all properties

const getProperties = async(req,res) => {
    //return all of the properties in the db sorted by last created date
    const properties = await Property.find({}).sort({createdAt: -1})

    res.status(200).json(properties)
}

// get a single property
const getProperty = async (req, res) => {
    
    const { id } = req.params

    const property = await Property.findById(id)

    if (!property){
        return res.status(404).json({error: 'Property does not exist.'})
    }

    res.status(200).status(property)

}

// create a new property
const createProperty = async (req, res) => {
    const {
        ListingId, 
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

    // add doc to db

    try{
        const property = await Property.create({
            ListingId, 
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

// update a property

//delete a property


module.exports = {
    getProperties,
    getProperty,
    createProperty
}