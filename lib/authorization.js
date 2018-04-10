"use strict";
const { verify } = require('./token');

function authorization(req, res, next) {
    const token = (req.headers || {}).authorization;
    if (!token) {
        return res.status(401).json({ message: "User Not authorized" });
    }
    let decodedToken;
    try {
        decodedToken = verify(token);
        console.log(decodedToken)
        next();
    } catch (error) {
        next(error);
    }
}


module.exports = authorization;