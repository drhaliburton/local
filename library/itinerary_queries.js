module.exports = (knex) => {
  const obj = {};

  // obj.getItinerary = function (user_id) {
  //   knex('itineraries')
  //     .where('user_id', user_id)
  //   // .and('date', date)
  // }

  obj.getItinerary = function (user_id, date) {

    //select itineraries where user_id and date
    //leftjoin itinerary_cards at itinerary_id
    //leftjoin cards at card_id
    knex('itinierary_cards')
    .where('user_id', user_id)
    .andWhere('date', date)
    .leftJoin('cards', 'itinerary_cards.card_id', 'cards.id')
    .leftJoin('itinerary_cards', 'itineraries.id', 'itinerary_cards.itinerary_id')
      .select(['cards.id AS card_id', 'cards.title', 'cards.description',
        'cards.location', 'cards.duration', 'cards.category_id', 'cards.address'
      ])
      .then((result) => {
        const itineraryCards = result;
        return Promise.all(result.map((card, index) => {
          return knex('photos')
            .select(knex.raw('ARRAY_AGG(photos.url) as photo_urls'))
            .where('card_id', card.card_id)
            .then((data) => {
              itineraryCards[index].photos = data[0].photo_urls;
            })
        }))
          .then(() => {
            return Promise.all(result.map((card, index) => {
              return knex('categories')
                .select('name')
                .where('id', card.category_id)
                .then((data) => {
                  itineraryCards[index].category_name = data[0].name;
                })
            }))
              .then(() => {
                return favCards

              })
          })
      })
  }
  // card is an array of card objects
  obj.makeItinerary = function (date, cardIds, userID) {
    console.log('make itinerary: ', date, cardIds, userID)
    knex('itineraries')
      .insert({
        date: date,
        user_id: userID
      })
      .returning('id')
      .then(function (id) {
        return Promise.all(cardIds.map((cardId) => {
          return knex('itinerary_cards')
            .insert({
              itinerary_id: id,
              card_id: cardId
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