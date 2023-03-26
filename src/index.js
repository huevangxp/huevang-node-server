const bodyParser = require('body-parser')
const router = require('./routes/routes')
const express = require('express')
const helmet = require('helmet' )
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

// routes
app.use(router)

const port = process.env.PORT || 9000
app.listen(port,()=> console.log('server running on port:',port))
