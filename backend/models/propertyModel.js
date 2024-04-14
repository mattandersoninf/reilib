// communicate with mongodb server for properties

const mongoose = require('mongoose')

// set up mongoose schema, this maps out how a property
// object will be defined in the mongodb server, what
// parameters that object will have, the paremeter's object type
// and whether the parameter will be a required input in order to
// post the object
const Schema = mongoose.Schema

const propertySchema =  new Schema({
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
        type: Number,
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
    },
    user_id:{
        type: String,
        required: true
    }
    /*
    PropertyType: {
        type: String,
        require:true
    },
    */

}, {timestamps: true})

module.exports = mongoose.model('Property', propertySchema)