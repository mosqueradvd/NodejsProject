const express = require('express');

const config = require('../config.js')
const user = require('./components/user/network')

const app = express();

// ROUTING
app.use('/api/user', user)

app.listen(config.api.port, () => {
  console.log(`API is listening on port ${config.api.port}`)
})