// user controller

const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
} 

// login user 
const loginUser = async (req,res) => {

    const {Email, Password} = req.body

    try {

        const user = await User.login(Email, Password);

        // create token
        // this will only allow users to view certain aspects of the website

        /*
        TOKEN EXAMPLE
        abc.123.def
        abc represents the header
        123 represents the payload
        def represents the signature
        
        */

        const token = createToken(user._id)


    
        res.status(200).json({ Email, user, token })

        // console.log(user)

    } catch (error) {

      console.error('Error signing up user:', error);

      res.status(500).json({ error: error.message });
    
    }
    

}

// signup user
const signupUser = async (req, res) => {
    const { Email, Password } = req.body;
  
    try {

        const user = await User.signup(Email, Password);

        // create token

        const token = createToken(user._id)
    
        res.status(200).json({ Email, user, token });

    } catch (error) {

      console.error('Error signing up user:', error);

      res.status(500).json({ error: error.message });
    
    }

};

module.exports = {signupUser, loginUser};
