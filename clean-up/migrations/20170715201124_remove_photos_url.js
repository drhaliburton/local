
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cards', function(table){
      table.dropColumn('photo_url')
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cards', function(table){

    table.string('photo_url')

    })
  ])
};
