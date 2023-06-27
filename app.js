require("dotenv").config()
require("./db")
const cors = require("cors");

const express = require("express")
const app = express()

app.use(cors({ origin: true }));

require("./config")(app)

app.use('/api', require('./routes'))

require("./error-handling")(app)

module.exports = app
