const express = require('express')

const db = require('../db')

const router = express.Router()



router.get('/', (req, res) => {
      res.render('add-dab')
    })

router.post('/', (req, res) => {
  const addDab = req.body
  console.log(addDab)
  db.newDab(addDab)
  .then(() => {
    res.redirect('/addDab')
})
})

function showError (err, res) {
  res.status(500).send('Database Error: ' + err.message)
}

module.exports = router