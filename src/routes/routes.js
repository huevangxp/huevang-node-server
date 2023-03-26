const express = require('express')
const router = express.Router()

//import file 
const categoryRoute = require('./category.routes')
const productRoute = require('./product.routes')
const userRoute = require('./user.routes')

//user
categoryRoute(router)
productRoute(router)
userRoute(router)

module.exports = router