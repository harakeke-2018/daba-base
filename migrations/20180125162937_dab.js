
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dabs', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('source')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dabs')
  
};
