
module.exports = (knex) => {
const obj = {};

  obj.makeFavorite = function(card_id, user_id){
    knex('favorite')
    .insert({
      card_id,
      user_id
    })
    .where('user_id', user.id)
    .and('card_id', card.id);
  }

  obj.getFiltered = function(lat1, lng1, lat2, lng2){
    return knex('cards')
      .whereRaw(`box '((${lat1}, ${lng1}),(${lat2}, ${lng2}))' @> ("location")`);

  }

  obj.allCards = function() {
    return knex('cards')
    .leftJoin('categories', 'cards.category_id', '=', 'categories.id')
    .leftJoin('users', 'cards.user_id', '=', 'users.id')
    .leftJoin('photos', 'cards.id', '=', 'photos.card_id')
    .leftJoin('ratings', 'cards.id', '=', 'ratings.card_id')
  }

return obj;
}
