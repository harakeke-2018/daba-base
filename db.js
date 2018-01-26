const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs,
  getAllDabs,
  newDab,
  getProfile
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

function newDab(addDab) {
  const addName = addDab.name
  const source = addDab.source
  const listKeys = Object.keys(addDab)
  
  return connection('dabs') 
  .insert({
    name: addName,
    source: source 
  })
  .then((id) => {   
    const dabId = id[0]
    const dabTags = []
    const tags = addDab.tag

    for (let i = 0; i < tags.length; i++) {
    let obj = {
            dab_id: dabId,
            tag_id: tags[i]
    }
          dabTags.push(obj)
    }
    console.log(dabTags)
    return connection('dab_tags')
      .insert(dabTags)
  
    

    // const dabId = id[0]
    // for (let i = 0; i < listKeys.length; i++) {
    //   return connection('tags')
    //   .where('tag', listKeys[i])
    //   .select('id')
    //   .then((something =>{
    //     return connection('dab_tags')
    //       .insert({
    //         dab_id: dabId,
    //         tag_id: Number(listKeys[i])
    //       })
    //   })

    // )
    // }
    
    // .where('tags', 'id', )
    // for(let i = 0; i < key.length; i++) {
    //   if (key[i] === "human") {
    //     connection('dab_tags')
    //     .insert({
    //       dab_id: dabId,
    //       tag_id: 1
    //     })
    //   }
    //     if (key[i] === "non-human") {
    //       connection('dab_tags')
    //       .insert({
    //         dab_id: dabId,
    //         tag_id: 2
    //   })
    // }
    //   if (key[i] === "inside") {
    //     connection('dab_tags')
    //     .insert({
    //       dab_id: dabId,
    //       tag_id: 3
    //     })
    //   }
    //     if (key[i] === "outside") {
    //       connection('dab_tags')
    //       .insert({
    //         dab_id: dabId,
    //         tag_id: 4
    //     })
    //   }
    //     if (key[i] === "group") {
    //       connection('dab_tags')
    //       .insert({
    //         dab_id: dabId,
    //         tag_id: 5 
    //     })
    //   }
    //       }
        })
        // .catch(err => showError(err, res))
      }
  
    
function getProfile(id) {
  return connection('dabs')
        .where('id', id)
        .select()
}
