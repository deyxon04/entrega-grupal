'use strict'

const express = require('express')
const morgan = require('morgan')
var bodyParser = require('body-parser')
const hbs = require('hbs')
const app = express();
const router = require('./controllers/index')
const partials = __dirname +  '/partials'

hbs.registerPartials(partials)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'hbs')
app.set('port', 3000)

app.use(router)

module.exports = app;