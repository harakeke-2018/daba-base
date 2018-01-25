
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {id: 1, tag: 'human'},
        {id: 2, tag: 'non-human'},
        {id: 3, tag: 'inside'},
        {id: 4, tag: 'outside'},
        {id: 5, tag: 'group'},
      ]);
    });
};
