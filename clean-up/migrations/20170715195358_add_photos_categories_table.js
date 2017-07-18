
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('photos', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('type')
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
    }),

    knex.schema.createTable('categories', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('url')
    }),

    knex.schema.table('cards', function(table){
      table.integer('category_id')
      table.foreign('category_id').references('categories.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('photos'),
    knex.schema.dropTable('categories'),
    knex.schema.table('cards', function(table){
      table.dropForeign('category_id')
      table.dropColumn('category_id')
    })
  ])
};
