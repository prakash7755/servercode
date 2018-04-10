'use strict';
const express = require('express');
const router = express.Router();
const path = require('path');
const { Photo } = require(path.resolve('./models'));
const multer = require('multer')
const upload = multer({ dest: path.resolve('./public/uploads') });


router.route('/photos')

    .post(upload.array('photos', 5), async(req, res, next) => {
        const filename = [];
        const originalname = [];
        req.files.forEach((files) => {
            filename.push(files.filename)
            originalname.push(files.originalname)
        });
        const photo = new Photo({ filename, originalname });
        try {
            const result = await photo.save();
            if (!result.filename) {
            	const error = new Error('No Photos upload');
            	return next(error);
            }
            res.json(result)
        } catch (error) {
            next(error)
        }

    })

    .get(async(req, res, next) => {
        try {
            const result = await Photo.find({});
            res.json(result);
        } catch (error) {
            next(error);
        }
    })


module.exports = router;