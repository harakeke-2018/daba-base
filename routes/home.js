const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/dabs', (req, res) => {
  db.getTaggedDabs()
    .then(generatedDabs => {
      console.log(generatedDabs)
      res.render('dabs', {generatedDabs})
    })
})

router.get('/dababase', (req, res) => {
  db.getTaggedDabs()
    .then(generatedDabs => {
      console.log(generatedDabs)
      res.render('dabs', {generatedDabs})
    })
})

module.exports = router
