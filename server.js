const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes/home')
const addDab = require('./routes/add-dab')

const server = express()

// Middleware

server.use(express.static('public'))
server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(bodyParser.urlencoded({ extended: true }))

// Routes

server.use('/addDab', addDab)
server.use('/', homeRoutes)

module.exports = server
