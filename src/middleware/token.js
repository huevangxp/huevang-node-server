const jwt = require('jsonwebtoken')

function verifyToken(req, res, nuxt) {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({error:'Unauthorized: token not found'})
    }
    try {
        const payload = jwt.verify(token, 'mysecretkey')
        req.payload = payload
        nuxt()
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

module.exports = verifyToken