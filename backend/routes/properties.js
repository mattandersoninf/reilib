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
const propertiesRoutes = require('./routes/properties')

const router = express.Router()

//GET ALL properties
router.get('/', (req,res) => {
    res.json({mssg:"GET all properties"})
})

//GET a single property
router.get('/:id', (req,res) => {
    res.json({mssg:"GET a single property"})
})

// POST a property
router.post('/', (req,res) =>{
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