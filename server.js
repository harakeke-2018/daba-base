const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes/home')

const server = express()

// Middleware

server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))

// Routes

server.use('/', homeRoutes)

module.exports = server

