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
const {
    getProperties,
    getProperty,
    createProperty,
    deleteProperty,
    updateProperty
} = require('../controllers/propertyController')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

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

// require authorization for all property routes
router.use(requireAuth)


//GET ALL properties
router.get('/',getProperties)

//GET a single property
router.get('/:id', getProperty)

// POST a property
router.post('/',createProperty)

// DELETE a property
router.delete('/:id', deleteProperty)

//UPDATE a property
router.patch('/:id', updateProperty)


module.exports = router