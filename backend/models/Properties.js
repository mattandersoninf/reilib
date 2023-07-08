// communicate with mongodb server for properties

const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const propertiesSchema =  new Schema({
    ListingId: {
        type: String,
        required: true
    },
    StreetNumber: {
        type: String,
        require:true
    },
    StreetName: {
        type: String,
        require:true
    },
    City: {
        type: String,
        require: true
    },
    StateOrProvince: {
        type: String,
        require:true
    },
    PostalCode: {
        type: String,
        require:true
    },
    ListPrice: {
        type: String,
        require:true
    },
    // sq footage, livable space
    LivingArea: {
        type: Number,
        require:true
    },
    BedroomsTotal: {
        type: Number,
        require:true
    },
    BathroomsTotalDecimal: {
        type: Number,
        require: true
    }
    /*
    PropertyType: {
        type: String,
        require:true
    },
    */


})

module.exports = mongoose.model('Property', propertySchema)