
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cards', function(table){
      table.dropForeign('category_id')
      table.dropColumn('category_id')
      table.integer('card_category_id')
      table.foreign('card_category_id').references('card_categories.id')
    }),
    knex.schema.table('card_categories', function(table){
      table.dropColumn('card_id')
    }),
    knex.schema.table('photo_urls', function(table){
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('card_categories', function(table){
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
    }),
    knex.schema.table('cards', function(table){
      table.integer('category_id')
      table.foreign('category_id').references('card_categories.id')
    }),
    knex.schema.table('photo_urls', function(table){
      table.dropForeign('card_id')
      table.dropColumn('card_id')
    })
  ])
};
