/* requireAuth.js

This file is to establish the use of jwt. This will help control what
each indivdual user will be able to view on the website.

*/
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async(req,res,next) => {

    // verify authentication

    const { authorization } = req.headers;

    if (!authorization){
        return res.status(401).json({error: 'Authorization token required.'});

    }

    const token = authorization.split(' ')[1];

    try{
        const {_id} = jwt.verify(token, process.env.SECRET);

        req.user = await User.findOne({_id}).select('_id');
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not authorized.'});
    }

}

module.exports = requireAuth