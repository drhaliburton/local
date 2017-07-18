
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('itinerary_cards', function(table){
      table.integer('card_id').unsigned()
      table.foreign('card_id').references('cards.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
  knex.schema.table('itinerary_cards', function(table){
      table.dropColumn('card_id')
    })
  ])
};
