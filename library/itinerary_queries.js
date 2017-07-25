module.exports = (knex) => {
  const obj = {};

  obj.getItinerary = function (user_id) {
    knex('itineraries')
      .where('user_id', user_id)
    // .and('date', date)
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
    return knex('favorites AS favs')
      .where('favs.user_id', user)
      .select(['cards.id AS card_id', 'cards.title', 'cards.description',
        'cards.location', 'cards.duration', 'cards.category_id', 'cards.address'
      ])
      .leftJoin('cards', 'favs.card_id', 'cards.id')
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
            return Promise.all(result.map((card, index) => {
                return knex('categories')
                  .select('name')
                  .where('id', card.category_id)
                  .then((data) => {
                    favCards[index].category_name = data[0].name;
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

// .then((results) => {
//   console.log(results)
//   return knex('cards AS favCards')
//     // .where('id', results[0].card_id)
// .leftJoin('categories', 'favCards.category_id', 'categories.id')
// .leftJoin('users', 'favCards.user_id', 'users.id')
// .select(['favCards.id AS card_id', 'favCards.title', 'favCards.description',
//   'favCards.location', 'favCards.duration', 'users.given_name',
//   'users.family_name', 'categories.name AS category_name',
// ])
// })
