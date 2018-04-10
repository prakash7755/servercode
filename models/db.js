'use strict';
const mongoose =  require('mongoose');


mongoose.connect('mongodb://localhost/indigodb')
.then(() => {
	console.log('Indigo DB will Now Connected');
})
.catch( error => {
	console.log('Indigo DB will Not Connected')
});



module.exports = mongoose;