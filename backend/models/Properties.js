// communicate with mongodb server for properties

const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const propertiesSchema =  new Schema({
    mlsListing: {
        type: String,
        required: true
    },
    address: {
        type: String,
        require:true
    },
    PropertyType: {
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
    bed: {
        type: Number,
        require:true
    },



})