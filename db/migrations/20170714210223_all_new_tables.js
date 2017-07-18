exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cards', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.string('type')
      table.specificType('location', 'point')
      table.string('description')
      table.string('photo_url')
      table.decimal('duration')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
    }),

    knex.schema.createTable('itineraries', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.string('itinerary_day')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
    }),

      knex.schema.createTable('itinerary_cards', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.time('start_time')
      table.integer('itinerary_id')
      table.foreign('itinerary_id').references('itineraries.id')
    }),

      knex.schema.createTable('ratings', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('rating')
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
    }),

      knex.schema.createTable('users', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('given_name')
      table.string('family_name')
    }),

      knex.schema.createTable('favorites', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('card_id')
      table.foreign('card_id').references('cards.id')
      table.integer('user_id')
      table.foreign('user_id').references('users.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cards'),
    knex.schema.dropTable('itineraries'),
    knex.schema.dropTable('itinerary_cards'),
    knex.schema.dropTable('ratings'),
    knex.schema.dropTable('favorites'),
    knex.schema.dropTable('users')
  ])
};


