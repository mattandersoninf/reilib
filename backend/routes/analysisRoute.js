/* analysis.js

User server functions to modify property analyses

*/

const express = require('express');


const router = express.Router()

const{
    //getAnalysis,
    createAnalysis,
    deleteAnalysis
    //,updateAnalysis
} = require('../controllers/analysisController')


// GET an analysis object
// router.get('/', getAnalysis)

// POST analysis
router.post('/:userID',createAnalysis);

// DELETE analysis
router.delete('/:id', deleteAnalysis)

//UPDATE analysis
// router.patch(':/analysis_id', updateAnalysis)

module.exports = router;