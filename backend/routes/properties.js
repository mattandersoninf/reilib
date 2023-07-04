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



//routes
router.get('/', () => {})

module.exports = router