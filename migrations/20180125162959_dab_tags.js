
exports.up = function(knex, Promise) {
  return knex.schema.createTable('dab_tags', table => {
    table.increments('id').primary()
    table.integer('dab_id').references('dab.id')
    table.integer('tag_id').references('tags.id')
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dab_tags')
};
