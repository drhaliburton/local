exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cards', function(table){
      table.dropColumn('type')
    })

  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('cards', function(table){

    table.string('type')

    })
  ])
};

