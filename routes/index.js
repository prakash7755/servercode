'use strict';
const bodyParser = require('body-parser');
const cmsData = require('./cms-data');
const path = require('path');
const { errorHandling, authorization } = require(path.resolve('./lib'));
const user = require('./auth');
const images = require('./images');

function routes(app){
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	app.use('/api', cmsData, user, images)
	app.use('/api/', authorization);


	app.use(errorHandling);
}

module.exports = routes;
