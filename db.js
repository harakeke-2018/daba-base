const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs
}

function getTaggedDabs() {

}

function getAllDabs() {
  return connection('dabs')
        .select()
}