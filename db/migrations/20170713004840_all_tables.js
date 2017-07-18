exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('card', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.string('location')
      table.string('description')
      table.string('photo_url')
      table.decimal('duration')
      table.integer('user_id')
      table.foreign('user_id').references('user.id')
    }),

    knex.schema.createTable('itinerary', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('title')
      table.string('itinerary_day')
      table.integer('user_id')
      table.foreign('user_id').references('user.id')
    }),

      knex.schema.createTable('itinerary_card', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.time('start_time')
      table.integer('favorite_id')
      table.foreign('favorite_id').references('favorite.id')
      table.integer('itinerary_id')
      table.foreign('itinerary_id').references('itinerary.id')
    }),

      knex.schema.createTable('rating', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('rating')
      table.integer('card_id')
      table.foreign('card_id').references('card.id')
      table.integer('user_id')
      table.foreign('user_id').references('user.id')
    }),

      knex.schema.createTable('user', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.string('given_name')
      table.string('family_name')
    }),

      knex.schema.createTable('favorite', function(table){
      table.increments('id').primary()
      table.timestamp('timestamp')
      table.integer('card_id')
      table.foreign('card_id').references('card.id')
      table.integer('user_id')
      table.foreign('user_id').references('user.id')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('card'),
    knex.schema.dropTable('itinerary'),
    knex.schema.dropTable('itinerary_card'),
    knex.schema.dropTable('rating'),
    knex.schema.dropTable('favorite'),
    knex.schema.dropTable('user')
  ])
};


