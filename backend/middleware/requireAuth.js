/* requireAuth.js

This file is to establish the use of jwt. This will help control what
each indivdual user will be able to view on the website.

*/
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async(req, res, next) => {

    // verify authentication

    const { authorization } = req.headers;

    console.log("Authorization: ",authorization);

    if (!authorization){
        return res.status(401).json({error: 'Authorization token required.'});

    }

    // grab the token
    // the auth structure is 'Bearer (token)'
    // since we just want the token, split it act the string and 
    // grab the token store it in 'token'
    const token = authorization.split(' ')[1];
    
    console.log("Bearer token:",token);

    try{

        
        console.log("at this point in the requireAuth, you can see the token.")
        console.log(token)

        const {_id} = jwt.verify(token, process.env.SECRET);


        // at this point we only need the user id to verify
        // what information we can see on the page, we don't need
        // the password or any other information
        req.user = await User.findOne({_id}).select('_id');
        
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({error: 'Request is not authorized.'});
    }

}

module.exports = requireAuth