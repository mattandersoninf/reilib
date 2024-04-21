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


var multer = require('multer');
var storage = multer.diskStorage({
  filename: function(req, file, callback) {
    callback(null, Date.now() + file.originalname);
  }
});
var imageFilter = function (req, file, cb) {
    // accept image files only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
var upload = multer({ storage: storage, fileFilter: imageFilter})

var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'drlofqucj', 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});


// set router object, this allows you to make requests and get responses
const router = express.Router()

// require authorization for all property routes
router.use(requireAuth)

//router.use('/:id')

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