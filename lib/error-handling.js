'use strict';

function errorHandlingMidleware(error, req, res, next) {
    if (error.name === 'ValidationError') {
        const keys = Object.keys(error.errors);
        const errorMessages = keys
            .map(key => error.errors[key].message)
            .filter(message => message)
            .toString();

        error.message = errorMessages;
        error.status = 500;
    }
    const { status = 400, message = 'Something Went Wrong' } = error;
    res.status(status).json({ message })
}

module.exports = errorHandlingMidleware;