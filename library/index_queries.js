module.exports = (knex) => {
  const obj = {};

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
      .leftJoin('ratings', 'filterCards.id', 'ratings.card_id')
      .select(['filterCards.id AS card_id', 'filterCards.title', 'filterCards.description',
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
      .select(['cards.id AS card_id', 'cards.title', 'cards.description', 'cards.location', 
        'cards.duration', 'users.given_name', 'users.family_name', 'categories.name AS category_name',
      ])
      .leftJoin('users', 'cards.user_id', 'users.id')
      .leftJoin('categories', 'cards.category_id', 'categories.id')
      .leftJoin('ratings', 'cards.id', 'ratings.card_id')
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
