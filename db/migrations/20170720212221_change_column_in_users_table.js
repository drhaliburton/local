
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.varchar('googleId').notNull().defaultTo(0);
    t.dropColumn('token');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.varchar('token').notNull().defaultTo(0);
    t.dropColumn('googleId');
  });
};