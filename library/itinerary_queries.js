module.exports = (knex) => {
  const obj = {};

  obj.getItinerary = function (user_id) {
    knex('itineraries')
      .where('user_id', user_id)
    // .and('date', date)
  }

  obj.getFavorite = function (user_id) {
    knex('favorite')
      .where('user_id', user_id)
  }
  // card is an array of card objects
  obj.makeItinerary = function (day, title, user_id, cards) {
    knex('itinerary')
      .insert({
        title: title,
        intinerary_day: day,
        user_id: user_id
      })
      .returning('id')
      .then(function (id) {
        return Promise.all(cards.map((card) => {
          return knex('itinerary_cards')
            .insert({
              start_time: card.start_time,
              intinerary_id: id,
              card_id: card.id
            })
        }))
      })
  }

  obj.favCards = function (user) {
    return knex('favorites')
      .where('favorites.user_id', user)
      .then((results) => {
        return knex('cards AS favCards')
          .where('favCards.id', results[0].card_id)
          .leftJoin('categories', 'favCards.category_id', 'categories.id')
          .leftJoin('users', 'favCards.user_id', 'users.id')
          .select(['favCards.id AS card_id', 'favCards.title', 'favCards.description',
            'favCards.location', 'favCards.duration', 'users.given_name',
            'users.family_name', 'categories.name AS category_name',
          ])
          .then((result) => {
            const favCards = result;
            return Promise.all(result.map((card, index) => {
                return knex('photos')
                  .select(knex.raw('ARRAY_AGG(photos.url) as photo_urls'))
                  .where('card_id', card.card_id)
                  .then((data) => {
                    favCards[index].photos = data[0].photo_urls;
                  })
              }))
              .then(() => {
                return favCards
              })
          })
      })
  }

  return obj;
}
