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
const requireAuth = require('../middleware/requireAuth')

// set router object, this allows you to make requests and get responses
const router = express.Router()

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