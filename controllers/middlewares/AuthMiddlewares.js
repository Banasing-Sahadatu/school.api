const jwt = require('jsonwebtoken')
const User = require('../models/userschema')





// is admin middleware

exports.admin = async function (req, res, next) {
    if (req.user && req.User.isAdmin) {
        res.status(401).json({
            message:"you are not anauthorised admin"
        })
    }
}
// json token middleware

exports.protect = async function (req, res, next) {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split("")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findBYId(decoded.id)
            next();
        } catch (err) {
            res.status(400).json({
                message: "invalid token"
            })
        }
    }
    if (!token) {
        res.status(400).json({
            message: "you are not authorised"
        })
    }
};