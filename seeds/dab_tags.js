
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dab_id').del()
    .then(function () {
      // Inserts seed entries
      return knex('dab_id').insert([
        {id: 1, dab_id: 1, tag_id: 1},
        {id: 2, dab_id: 1, tag_id: 1},
        {id: 3, dab_id: 1, tag_id: 1}
      ]);
    });
};
