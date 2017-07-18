<<<<<<< HEAD:db/seeds/users.js
exports.seed = function(knex, Promise) {

   
Promise.all([
        knex('users').insert({given_name: 'Aisha' , family_name: 'R'}),
        knex('users').insert({given_name: 'Holden', family_name: 'W'}),
        knex('users').insert({given_name: 'Rebecca', family_name: 'H'}),
        knex('users').insert({given_name: 'Shauna', family_name: 'G'})
      ])
};
=======
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({given_name: 'Aisha' , family_name: 'R'}),
        knex('users').insert({given_name: 'Holden', family_name: 'W'}),
        knex('users').insert({given_name: 'Rebecca', family_name: 'H'}),
        knex('users').insert({given_name: 'Shauna', family_name: 'G'})
      ])
    })
};
>>>>>>> 234891b613aace3100e5a02dbf0576b64649acd5:db/seeds/1_add_users.js
