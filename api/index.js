const express = require('express');

const config = require('../config.js')
const user = require('./components/user/network');
const bodyParser = require('body-parser');

const swaggerUI = require('swagger-ui-express')

const app = express();


app.use(bodyParser.json())

const swaggerDoc = require('./swagger.json')
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

// ROUTING
app.use('/api/user', user)

app.listen(config.api.port, () => {
  console.log(`API is listening on port ${config.api.port}`)
})