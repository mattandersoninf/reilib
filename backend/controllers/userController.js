
/* codeblock 3 */

// user controller

const User = require('../models/userModel')
const bcrypt = require('bcrypt')

// login user 
const loginUser = async (req,res) => {
    res.json({mssg:'login user'})
}

// signup user
const signupUser = async (req, res) => {
    const { Email, Password } = req.body;
  
    try {

      const userExists = await User.signup(Email, Password);
  
      res.status(200).json({ Email, userExists });

    } catch (error) {

      console.error('Error signing up user:', error);

      res.status(500).json({ error: 'An error occurred while signing up the user' });
    
    }
};

module.exports = {signupUser, loginUser};
