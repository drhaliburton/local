
module.exports = (knex) => {
const obj = {};

obj.makeFavorite = function(card_id, user_id){
  knex('favorite')
  .insert({
    card_id,
    user_id
  })
  .where('user_id', user.id)
  .and('card_id', card.id)
}


// coordinates = {result. geometry.location}
// name = result.name

obj.getIndex = function(latitude, longitude){
    knex('card')
    .where('latitude', latitude)
    .and('longitude', longitude)
  }

obj.getFiltered = function(category){
  knex('card')
  .where('category', category)

};

return obj;
}

