// communicate with mongodb server for properties

const mongoose = require('mongoose')

// set up mongoose schema, this maps out how a property
// object will be defined in the mongodb server, what
// parameters that object will have, the paremeter's object type
// and whether the parameter will be a required input in order to
// post the object
const Schema = mongoose.Schema

// separate schema for images associated with a property

const ImageSchema = new Schema({
    url: String, 
    filename: String
})
ImageSchema.virtual('thumbnail').get(function(){
    return this.url.replace('/upload', '/upload/w_300');
})

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
    },
    Analyses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Analysis'
        }
    ]

}, {timestamps: true})

module.exports = mongoose.model('Property', propertySchema)