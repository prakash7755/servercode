'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const options = { timestamps: true };


const CmsData = new Schema({
	aboutp1: {type: String, default: ''},
	aboutp2: {type: String, default: ''},
	aboutp3: {type: String, default: ''},
	product: {type: Array, default: ['']},
	// services: {type: Array},
    email: {type: String, default: ''},
    email1: {type: String, default: ''},
    mobile: {type: String, default: ''},
    mobile1: {type: Number, default: ''},
    address: {type: String, default: ''},
    filename: {type: Array, default: ''}
}, options)


module.exports = mongoose.model('CmsDatas', CmsData);
