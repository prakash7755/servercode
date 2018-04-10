'use strict';
const path = require('path')
const express = require('express');
const router = express.Router();
const { CmsData } = require(path.resolve('./models'));



router.route('/')

.post(async(req, res, next) => {
	const product = req.body.product.split(',');
	// const services = req.body.services.split(',');
    req.body.product = product;
    // req.body.services = services;
	const cmsData = new CmsData(req.body);
	try{
		const result = await cmsData.save();
		if (!result) {
			return res.json({message: 'Not Updated Successfully'})
		}
		 res.json({message: 'Updated Successfully'})
	}
	catch(error){
		next(error)
	}
})

.get(async(req, res, next) => {
	try {
		const result = await CmsData.find({})
		if (result.length === 0) {
			return res.json({message: 'No Data Found In DataBase'})
		}
       res.json(result)
	}
	catch (error){
		next(error)
	}
})

router.route('/edit')

.post(async(req, res, next) =>{
	const { id } = req.body;
	const {aboutp1, aboutp2, aboutp3, product, email, email1, mobile, mobile1, address} = req.body;
	try{
    const result =await CmsData.update({_id: id}, { $set:{aboutp1, aboutp2, aboutp3, product, email, email1, mobile, mobile1, address}})
			res.json(result)
	}
	catch(error){
		next(error);
	}
})

module.exports = router;
