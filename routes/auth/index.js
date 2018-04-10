'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');
const { User } = require(path.resolve('./models'));
const { bcrypt, TokenServ } = require(path.resolve('./lib'));



router.route('/register')

    .post( async(req, res, next) => {
        try {
            const hashPassword = await bcrypt.hash(req.body.password)
            req.body.password = hashPassword;
            const user = new User(req.body);
            const result = await user.save();
            const { email, id } = result;
            const tokenData = { email, id };
            const token = await TokenServ.generate(tokenData);
            res.json({ token });
        } catch (error) {
            next(error);
        }
    })


router.route('/login')

    .post(async(req, res, next) => {
       const { email, password } = req.body;
        try {
            const result = await User.findOne({ email });
            if (!result) {
                const error = new Error('Email Id Not found');
                return next(error);
            }
            const isSucess = await bcrypt.match(password, result.password);
            if (!isSucess) {
                const error = new Error('Wrong Password');
               return next(error);
            }
            const tokenData = { email, id: result.id };
            const token = await TokenServ.generate(tokenData);
            res.json({ token });
        } catch (error) {
            next(error);
        }
    })



module.exports = router;