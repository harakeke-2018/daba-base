const express = require('express')

const bodyParser = require('body-parser')

const db = require('../db')

const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }))

//
// Home Functions
//

router.get('/', (req, res) => {
  res.render('index')
})
//     .catch(err => {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// })

router.post('/', (req, res) => {
  db.getTaggedDabs(req.body)
    .then(objFinal => {
      res.render('dabs', {generatedDabs: objFinal})
    })
})

//
// End of Home Functions
//

router.get('/dabs', (req, res) => {
  db.getAllDabs()
    .then(generatedDabs => {
      res.render('dabs', {generatedDabs})
    })
})

router.get('/dababase', (req, res) => {
  db.getAllDabs()
    .then(generatedDabs => {
      console.log(generatedDabs)
      res.render('dababase', {generatedDabs})
    })
})

router.get('/dab-profile/:id', (req, res) => {
  db.getProfile(req.params.id)
    .then((dabProfile) => {
      console.log(dabProfile)
      res.render('dab-profile', {dabs: dabProfile})
    })
})

module.exports = router
