
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw('DROP TABLE IF EXISTS user CASCADE')
        .raw('DROP TABLE IF EXISTS users CASCADE')
        .raw('DROP TABLE IF EXISTS cards CASCADE')
        .raw('DROP TABLE IF EXISTS favorites CASCADE')
        .raw('DROP TABLE IF EXISTS favorite CASCADE')
        .raw('DROP TABLE IF EXISTS itinerary CASCADE')
        .raw('DROP TABLE IF EXISTS itineraries CASCADE')
        .raw('DROP TABLE IF EXISTS itineraries CASCADE')
        .raw('DROP TABLE IF EXISTS itinerary_card CASCADE')
        .raw('DROP TABLE IF EXISTS itinerary_cards CASCADE')
        .raw('DROP TABLE IF EXISTS rating CASCADE')
  ])
};

exports.down = function(knex, Promise) {
  
};
