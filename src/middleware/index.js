const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = function (req, res, next) {
    try {
        const fullToken = req.headers.authorization
        if (!fullToken) {
            return res.status(401).json({ message:'Unauthorized: token not found!' })
        }
        const token = fullToken.split(' ');
        if (token[0] != 'HUE') {
            return res.status(401).json({ message:'Invalid token!' })
        }
        if (!token[1]) {
            return res.status(401).json({message:'Invalid token!'})
        }
        
        const payload = jwt.verify(token[1], process.env.SECRETKEY)
    
        if (!payload) {
            return res.status(401).json({message:'Unauthorized: verify token!'})
        }
       
        req.payload = payload
        next()
    } catch (error) {
        req.payload = null
        return res.status(500).json({message:'Internal server error!'+ error.message})
    }
   
}

module.exports = verifyToken;