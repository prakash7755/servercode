'use strict';
const errorHandling = require('./error-handling');
// const bcrypt = require('./password-bcrypt');
const TokenServ = require('./token')
const authorization = require('./authorization')


module.exports = {
	errorHandling,
	// bcrypt,
	TokenServ,
	authorization
}