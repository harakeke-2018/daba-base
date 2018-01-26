const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')

const homeRoutes = require('./routes/home')
const addDab = require('./routes/add-dab')


const server = express()

// Middleware

<<<<<<< HEAD
server.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main'
}))
=======
server.use(express.static('public'))
server.engine('hbs', hbs({extname: 'hbs'}))
>>>>>>> c557cdcfd5dd3a8f6dc591addd5a077ab3388726
server.set('view engine', 'hbs')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))


// Routes

server.use('/addDab', addDab)
server.use('/home', homeRoutes)



module.exports = server
