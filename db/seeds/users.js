exports.seed = function(knex, Promise) {

   
Promise.all([
        knex('users').insert({given_name: 'Aisha' , family_name: 'R'}),
        knex('users').insert({given_name: 'Holden', family_name: 'W'}),
        knex('users').insert({given_name: 'Rebecca', family_name: 'H'}),
        knex('users').insert({given_name: 'Shauna', family_name: 'G'})
      ])
};
