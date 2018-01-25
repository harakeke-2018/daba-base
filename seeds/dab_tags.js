
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dab_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('dab_tags').insert([
        {id: 1, dab_id: 1, tag_id: 2}, // Dab-asaur: non-human
        {id: 2, dab_id: 2, tag_id: 1}, // Tiger Hat Man: human
        {id: 3, dab_id: 2, tag_id: 2}, // Tiger Hat Man: inside
        {id: 4, dab_id: 3, tag_id: 1}, // Armish: human
        {id: 5, dab_id: 3, tag_id: 3}, // Armish: inside
        {id: 6, dab_id: 3, tag_id: 5}, // Armish: group
        {id: 7, dab_id: 4, tag_id: 2}, // Bird: non-human
        {id: 8, dab_id: 4, tag_id: 2}, // Bird: outside
        {id: 9, dab_id: 5, tag_id: 2}, // Turtle: non-human
        {id: 10, dab_id: 5, tag_id: 4}, // Turtle: outside
        {id: 11, dab_id: 6, tag_id: 1}, // Slip n Slide: human 
        {id: 12, dab_id: 6, tag_id: 4}, // Slip n Slide: outside
        {id: 13, dab_id: 7, tag_id: 2}, // Tree Dabbing: non-human
        {id: 14, dab_id: 7, tag_id: 4}, // Tree Dabbing: outside
        {id: 15, dab_id: 8, tag_id: 2}, // Unicorn: non-human
        {id: 16, dab_id: 9, tag_id: 1}, // Spinning in office: human
        {id: 17, dab_id: 9, tag_id: 3}, // Spinning in office: inside
        {id: 18, dab_id: 10, tag_id: 1}, // Bat group: human
        {id: 19, dab_id: 10, tag_id: 2}, // Bat group: non-human
        {id: 20, dab_id: 10, tag_id: 2}, // Bat group: inside
        {id: 21, dab_id: 10, tag_id: 5} // Bat group: group
      ])
    })
}
