module.exports = (knex) => {
  const obj = {};

  obj.hasVoted = function(card_id, user_id){
    return knex('ratings')
    .where({ card_id, user_id })
    .first()
    .then((rating) => {
      if(!rating){
        throw new Error(`No ratings for (card_id=${card_id}, user_id=${user_id}`);
      }
      return knex('ratings')
      .where({ card_id, user_id })
      .first()
    })
    .catch(() => {
      return knex ('ratings')
      })
  }


  obj.postUpvote= function(card_id, user_id){
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


  obj.addFavorite = function (cardId, userId) {
    return knex('favorites')
      .insert({
        card_id: cardId,
        user_id: userId
      })
  }

  obj.getFiltered = function (lat1, lng1, lat2, lng2) {
    return knex('cards AS filterCards')
      .whereRaw(`box '((${lat1}, ${lng1}),(${lat2}, ${lng2}))' @> ("location")`)
      .leftJoin('users', 'filterCards.user_id', 'users.id')
      .leftJoin('categories', 'filterCards.category_id', 'categories.id')
      .select(['filterCards.id AS card_id', 'filterCards.title', 'filterCards.description', 'filterCards.total_rating',
        'filterCards.location', 'filterCards.duration', 'users.given_name',
        'users.family_name', 'categories.name AS category_name',
      ])
      .then((result) => {
        const filterCards = result;
        return Promise.all(result.map((card, index) => {
            return knex('photos')
              .select(knex.raw('ARRAY_AGG(photos.url) as photo_urls'))
              .where('card_id', card.card_id)
              .then((photos) => {
                filterCards[index].photos = photos[0].photo_urls;
              })
          }))
          .then(() => {
            return filterCards
          })
      })
  }

  obj.allCards = function () {
    return knex('cards')
      .select(['cards.id AS card_id', 'cards.title', 'cards.description', 'cards.location', 'cards.total_rating',
        'cards.duration', 'users.given_name', 'users.family_name', 'categories.name AS category_name',
      ])
      .leftJoin('users', 'cards.user_id', 'users.id')
      .leftJoin('categories', 'cards.category_id', 'categories.id')
      .then((result) => {
        const allCards = result;
        return Promise.all(result.map((card, index) => {
            return knex('photos')
              .select(knex.raw('ARRAY_AGG(photos.url) as photo_urls'))
              .where('card_id', card.card_id)
              .then((photos) => {
                allCards[index].photos = photos[0].photo_urls;
              })
          }))
          .then(() => {
            return allCards
          })
      })
  }

  return obj;
}
