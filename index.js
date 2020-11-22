const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')
const PORT = process.env.PORT || 5000;

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(PORT, () => {
    console.log(`Backend executando na porta ${PORT}...`)
})