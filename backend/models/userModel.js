
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

// static signup method
userSchema.statics.signup = async function(Email, Password) {

    // validation

    if (!Email || !Password){
        throw Error('All fields must be filled.')
    }
    if(!validator.isEmail(Email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(Password)){
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ Email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(Password, salt)

    const user = await this.create({ Email, Password: hash})

    return user

}

// static login method
userSchema.statics.login = async function(Email, Password){
    
    if (!Email || !Password){

        throw Error('All fields must be filled.')

    }

    const user = await this.findOne({ Email })

    // if the user does not exist, prompt the user that the email is incorrect
    if (!user) {
        throw Error('Incorrect email')
    }

    // compare the password entered with the hashed password that already exists for the user
    const match = await bcrypt.compare(Password, user.Password)

    if (!match){
        throw Error('Incorrect password')
    }

    return user

}


module.exports = mongoose.model('User', userSchema)
