exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.table('itinerary_card' , function(table){
      table.dropForeign('favorite_id')
      table.dropColumn('favorite_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.table('users'),
  knex.schema.table('itinerary_card', function(table){
      table.integer('favorite_id').unsigned()
      table.foreign('favorite_id').references('favorite.id')
      table.dropColumn('email')
    })
  ])
};
