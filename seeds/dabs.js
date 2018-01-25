
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dabs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dabs').insert([
        {id: 1, name: 'Dab-asaur', source: 'https://media.giphy.com/media/l3zoKeX8bMG5sMP4s/giphy.gif'},
        {id: 2, name: 'Tiger Hat Man', source: 'https://media.giphy.com/media/3o7WTHY6qalYbQFCKI/giphy.gif'},
        {id: 3, name: 'Armish Group Dabding', source: 'https://media.giphy.com/media/XmgbcmQvLEThS/giphy.gif'},
        {id: 4, name: 'Bird Dab', source: 'https://media.giphy.com/media/11RgbBSgomKx6o/giphy.gif'},
        {id: 5, name: 'Turtle Dab', source: 'https://media.giphy.com/media/RkyTmMTOsMN20/giphy.gif'},
        {id: 6, name: 'Slip n Slide', source: 'https://media.giphy.com/media/3o7TKNh1j30yBdtTXi/giphy.gif'},
        {id: 7, name: 'Tree Dabbing', source: 'https://media.giphy.com/media/3o7TKNh1j30yBdtTXi/giphy.gif'},
        {id: 8, name: 'Unicorn Dab', source: 'https://media1.tenor.com/images/30aecf17c93b8f53d3a46ccb00c790a7/tenor.gif?itemid=10813483'},
        {id: 9, name: 'Spinning Office Dab', source: 'https://media.giphy.com/media/bXvwCQglnTGKs/giphy.gif'},
        {id: 10, name: 'Batman Group Dab', source: 'https://media.giphy.com/media/l0HUqbvkdpSxxr9Ac/giphy.gif'}
      ])
    })
}
