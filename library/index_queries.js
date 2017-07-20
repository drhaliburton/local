
module.exports = (knex) => {
const obj = {};

  obj.makeFavorite = function(card_id, user_id){
    knex('favorite')
    .insert({
      card_id,
      user_id
    })
    .where('user_id', user_id)
    .and('card_id', card_id);
  }

  obj.getFiltered = function(lat1, lng1, lat2, lng2){
    return knex('cards')
      .whereRaw(`box '((${lat1}, ${lng1}),(${lat2}, ${lng2}))' @> ("location")`);

  }

  obj.allCards = function() {
    return knex('cards')
    .select(['cards.id AS card_id', 'cards.title', 'cards.description', 'cards.location', 'cards.duration',
    'users.given_name', 'users.family_name', 'categories.name AS category_name', 'photos.url AS photo_url', 'ratings.rating'])
    .leftJoin('users', 'cards.user_id', '=', 'users.id')
    .leftJoin('categories', 'cards.category_id', '=', 'categories.id')
    .leftJoin('photos', 'cards.id', '=', 'photos.card_id')
    .leftJoin('ratings', 'cards.id', '=', 'ratings.card_id')
    .orderBy('rating', 'desc')
  }

return obj;
}
