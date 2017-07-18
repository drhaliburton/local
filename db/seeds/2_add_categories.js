exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({name: 'outdoors'}),
        knex('categories').insert({name: 'food'}),
        knex('categories').insert({name: 'shopping'}),
        knex('categories').insert({name: 'culture'}),
        knex('categories').insert({name: 'spas & wellness'})
      ]);
    });

};