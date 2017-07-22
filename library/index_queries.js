
module.exports = (knex) => {
const obj = {};


  obj.addFavorite = function(cardId, userId) {
    return knex('favorites')
    .insert({
      card_id: cardId,
      user_id: userId
    })
  }

  obj.getFiltered = function(lat1, lng1, lat2, lng2){
    return knex('cards')
      .whereRaw(`box '((${lat1}, ${lng1}),(${lat2}, ${lng2}))' @> ("location")`);

  }

  obj.allCards = function() {
    return knex('cards')
    .select(['cards.id AS card_id', 'cards.title', 'cards.description', 'cards.location', 'cards.duration', 'cards.total_rating',
    'users.given_name', 'users.family_name', 'categories.name AS category_name', 'photos.url AS photo_url'])
    .leftJoin('users', 'cards.user_id', '=', 'users.id')
    .leftJoin('categories', 'cards.category_id', '=', 'categories.id')
    .leftJoin('photos', 'cards.id', '=', 'photos.card_id')
    .leftJoin('ratings', 'cards.id', '=', 'ratings.card_id')
    .orderBy('rating', 'desc')
  }

  return obj;
}
