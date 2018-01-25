
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dabs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dabs').insert([
        {id: 1, name: '1', source: 'Url-1'},
        {id: 2, name: '2', source: 'Url-2'},
        {id: 3, name: '3', source: 'Url-3'},
        {id: 4, name: '4', source: 'Url-4'},
        {id: 5, name: '5', source: 'Url-5'},
        {id: 6, name: '6', source: 'Url-6'},
        {id: 7, name: '7', source: 'Url-7'},
        {id: 8, name: '8', source: 'Url-8'},
        {id: 9, name: '9', source: 'Url-9'},
        {id: 10, name: '10', source: 'Url-10'}
      ]);
    });
};
