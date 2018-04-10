'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid');
const options = { timestamps: true };



const Photo = new Schema({
    id: { type: String, default: uuid },
    filename: { type: String, default: '' },
    originalname: {type: String, default: ''}
}, options);


module.exports = mongoose.model('photos', Photo);