
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('categories', function(table){
      table.increments('id').primary()
      table.string('name')
    }),
    knex.schema.table('cards', function(table){
      table.dropColumn('card_category_id')
    }),
    knex.schema.table('card_categories', function(table){
      table.dropColumn('type')
      table.integer('category_id')
      table.foreign('category_id').references('categories.id')
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('categories'),

    knex.schema.table('cards', function(table){
      table.integer('card_category_id')
      table.foreign('card_category_id').references('card_categories.id')
    }),
    knex.schema.table('card_categories', function(table){
      table.string('type')
      table.dropColumn('category_id')
    })
  ])
};
