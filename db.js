const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTaggedDabs,
  newDab
}

function getTaggedDabs() {
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
  
    
