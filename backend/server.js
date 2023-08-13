const express = require('express')
const PORT = require('./config/index')
const router = require('./routes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

app.use(router)

app.use(errorHandler)
app.listen(PORT, console.log(`server is running on localhost ${PORT}`))
