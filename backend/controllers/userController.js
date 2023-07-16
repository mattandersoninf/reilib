
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
      const userExists = await User.findOne({ Email: Email });
      if (userExists) {
        return res.status(400).json({ error: 'Email already in use' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(Password, salt);
  
      const user = await User.create({ Email: Email, Password: hash });
      res.status(200).json({ Email, user });
    } catch (error) {
      console.error('Error signing up user:', error);
      res.status(500).json({ error: 'An error occurred while signing up the user' });
    }
};

module.exports = {signupUser, loginUser};
