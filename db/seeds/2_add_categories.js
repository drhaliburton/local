exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
    return knex('categories').del()
    .then(function () {
      return Promise.all([
        knex('categories').insert({name: 'Nature'}),
        knex('categories').insert({name: 'Food'}),
        knex('categories').insert({name: 'Shopping'}),
        knex('categories').insert({name: 'Sights'}),
      ]);
    });

};