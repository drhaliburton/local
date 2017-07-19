
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.renameTable('photos', 'card_categories'),
    knex.schema.renameTable('categories', 'photo_urls')
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.renameTable('categories', 'photos'),
    knex.schema.renameTable('photos', 'categories')
  ])
};