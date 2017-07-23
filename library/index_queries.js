
module.exports = (knex) => {
const obj = {};

  obj.postUpvote= function(card_id,user_id){
    return knex('ratings')
    .insert({
      rating: 1,
      user_id: user_id,
      card_id: card_id
    })
    .where('card_id', card_id)
    .then(() => {
      return knex('cards')
      .where('id', card_id)
      .increment('total_rating', 1)
    })
  }

  obj.postDownvote= function(card_id, user_id){
    return knex('ratings')
    .insert({
      rating: -1,
      user_id: user_id,
      card_id: card_id
    })
    .where('card_id', card_id)
    .then(() => {
      return knex('cards')
      .where('id', card_id)
      .decrement('total_rating', 1)
    })
  }


  obj.getRatings= function(card_id){
    const data = {}
    return knex('cards')
    .where('id', card_id)
    .select('total_rating')
  }

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
