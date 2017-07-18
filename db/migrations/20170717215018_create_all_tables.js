exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('users', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('given_name')
      table.string('family_name')
    }),

    knex.schema.createTable('cards', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.specificType('location', 'point')
      table.string('description')
      table.integer('duration')
      table.integer('category_id').references('categories.id')
      table.integer('user_id').references('users.id')
    }),

    knex.schema.createTable('itineraries', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.string('itinerary_day')
      table.date('date')
      table.integer('user_id').references('users.id')
    }),

    knex.schema.createTable('itinerary_cards', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.time('start_time')
      table.integer('itinerary_id').references('itineraries.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('favorite_id').references('favorites.id').onDelete('CASCADE').onUpdate('CASCADE')
    }),

    knex.schema.createTable('ratings', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('rating')
      table.integer('card_id').references('cards.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
    }),

    knex.schema.createTable('photos', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('url')
      table.integer('card_id').references('cards.id').onDelete('CASCADE').onUpdate('CASCADE')
    }),

    knex.schema.createTable('favorites', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('card_id').references('cards.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
    }),

    knex.schema.createTable('categories', function(table){
      table.increments('id').primary()
      table.string('name')
    }),

    knex.schema.createTable('card_categories', function(table){
      table.increments('id').primary()
      table.integer('category_id').references('categories.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('card_id').references('cards.id').onDelete('CASCADE').onUpdate('CASCADE')
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users').onDelete('CASCADE')
  ])
  .then(() => {
  return Promise.all([
    knex.schema.dropTable('cards')
  ])
    .then(() => {
      return Promise.all ([
        knex.schema.dropTable('itineraries'),
        knex.schema.dropTable('itinerary_cards'),
        knex.schema.dropTable('ratings'),
        knex.schema.dropTable('photos'),
        knex.schema.dropTable('favorites'),
        knex.schema.dropTable('categories'),
        knex.schema.dropTable('card_categories')
      ])
    })
  })
};
