
/* codeblock 4 */

// communicate with mongodb server for properties

const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema =  new Schema({
    Email:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
        unique: true,
    }

})

// STATIC SIGNUP METHOD
userSchema.statics.signup = async function(Email, Password) {

    const exists = await this.findOne({ Email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(Password, salt)

    const user = await this.create({ Email, Password: hash})

    return user

}



module.exports = mongoose.model('User', userSchema)
