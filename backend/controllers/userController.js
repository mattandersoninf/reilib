
/* codeblock 3 */

// user controller

const User = require('../models/userModel')
const bcrypt = require('bcrypt')
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

        const token = createToken(user._id)
    
        res.status(200).json({ Email, token });

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
    
        res.status(200).json({ Email, token });

    } catch (error) {

      console.error('Error signing up user:', error);

      res.status(500).json({ error: error.message });
    
    }

};

module.exports = {signupUser, loginUser};
