'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const options = { timestamps: true };


 const requiredFieldMessage = (filed) => {
   let message = `${filed} Should Not Be Empty`
   return [true, message]
}


const User = new Schema({
    id: { type: String, default: uuid },
    shopId: { type: String, required: requiredFieldMessage('Shop ID') },
    email: { type: String, unique: true, required: requiredFieldMessage('Email ID') },
    name: { type: String, required: requiredFieldMessage('Name') },
    area: { type: String, required: requiredFieldMessage('Area') },
    city: { type: String, required: requiredFieldMessage('City') },
    country: { type: String, required: requiredFieldMessage('Country') },
    pinCode: { type: String, required: requiredFieldMessage('Pincode') },
    phone: { type: String, required: requiredFieldMessage('Mobile Number') },
    password: { type: String, required: requiredFieldMessage('Password') },
    profilePic: { type: String, default: '' },
}, options);


module.exports = mongoose.model('users', User);