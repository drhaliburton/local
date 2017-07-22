
exports.up = function(knex, Promise) {
  return knex.schema.table('cards', function(t) {
    t.integer('total_rating')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('cards', function(t) {
    t.dropColumn('total_rating')
  });
};
