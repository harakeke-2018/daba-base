const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
      res.render('index')
    })
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

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

rounter.get('/dab-profile', (req, res) => {
  db.getProfile()
    .then( () => {
      res.render('dab-profile')

    })
})

module.exports = router
