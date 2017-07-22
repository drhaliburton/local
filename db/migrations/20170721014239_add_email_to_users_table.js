
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
      t.varchar('email').notNull().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
        t.dropColumn('email');
    });
};