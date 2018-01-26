const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs,
  getAllDabs
}

function getTaggedDabs (dabs) {
  //
  // Join function
  //
  let keyArray = Object.keys(dabs)
  keyArray = keyArray.map(key => Number(key))
  let dbArray = []
  let finalObjects = []

  return connection('tags')
    .join('dab_tags', 'tags.id', 'dab_tags.tag_id')
    .join('dabs', 'dabs.id', 'dab_tags.dab_id')
    .select('dabs.name', 'tags.tag', 'dabs.id as dabId', 'dabs.source')
    .whereIn('tags.id', keyArray)
    .then(jointDB => {
      jointDB.forEach(element => {
        const existing = finalObjects.find(o => o.dabId === element.dabId)
        if (!existing) finalObjects.push(element)
      })
      return finalObjects
    })
}

function getAllDabs () {
  return connection('dabs')
    .select()
}
