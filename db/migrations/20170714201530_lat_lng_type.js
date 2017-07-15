
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('card', function(table){
      table.string('type')
      table.dropColumn('location')
      table.specificType('geolocation', 'point')
    })
  ])

};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('card', function(table){
    table.dropColumn('type')
    table.string('location')
    table.dropColumn('geolocation', 'point')

    })
  ])
};




