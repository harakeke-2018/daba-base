const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs,
  getAllDabs
}

function getTaggedDabs (dabs) {
  console.log(dabs)
  //
  // Join function
  //
  let keyArray = Object.keys(dabs)
  console.log(keyArray)
  let dbArray = []
  let finalObjects = []
  
  connection('tags')
    .join('dab_tags', 'tags.id', 'dab_tags.tag_id')
    .then(jointDB => {
      dbArray.push(jointDB)
    })
    .then(() => {
      for (let i = 0; i < dbArray[0].length; i++) {
        console.log("Working on:", dbArray[0][i])
        for (let j = 0; j < Object.keys(dabs).length; j++) {
          if (dbArray[0][i].tag_id == keyArray[j]) {
            finalObjects.push(dbArray[0][i])
          }
        }
      }
      console.log(finalObjects)
    })
}

function getAllDabs () {
  return connection('dabs')
    .select()
}
