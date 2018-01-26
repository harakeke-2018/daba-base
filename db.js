const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs
}

function getTaggedDabs() {
  return connection('dabs')
        .select()
}

function getProfile(id) {
  return connection('dabs')
        .where('id', id)
        .select()
}