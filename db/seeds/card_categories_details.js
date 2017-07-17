exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([
    // Inserts seed entries
    knex('card_categories').insert({type: 'outdoors'}),
    knex('card_categories').insert({type: 'food'}),
    knex('card_categories').insert({type: 'shopping'}),
    knex('card_categories').insert({type: 'culture'}),
    knex('card_categories').insert({type: 'spas & wellness'}),
  ]);
};