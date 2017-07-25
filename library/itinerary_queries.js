module.exports = (knex) => {
  const obj = {};

  // obj.getItinerary = function (user_id) {
  //   knex('itineraries')
  //     .where('user_id', user_id)
  //   // .and('date', date)
  // }


  obj.getItinerary = function (user_id, date) {

    return knex('itinieraries')
      .select('itinerary_cards.card_id', 'itineraries.id AS itn_id', 'itineraries.user_id')
      .where('date', date)
      .andWhere('user_id', user_id)
      .leftJoin('itinerary_cards', 'itineraries.id', 'itinerary_cards.itinerary_id')
      .then((result) => {
        console.log(`result1: ${result} \n...END`)
        const itineraryCards = result;
        return Promise.all(result.map((card, index) => {
            return knex('cards')
              .where('card_id', card.card_id)
              .leftJoin('photos', 'card.id', 'photos.card_id')
              .select(['cards.title', 'cards.description',
                'cards.location', 'cards.duration', 'cards.category_id', 'cards.address', knex.raw('ARRAY_AGG(photos.url) as photo_urls')
              ])
              .groupBy('cards.duration','cards.title')
              .then((data) => {
                itineraryCards[index].title = data[0].title;
                itineraryCards[index].description = data[0].description;
                itineraryCards[index].duration = data[0].duration;
                itineraryCards[index].location = data[0].location;
                itineraryCards[index].address = data[0].address;
                itineraryCards[index].title = data[0].category_id;
                itineraryCards[index].photos = data[0].photo_urls;
              })
          }))
          .then(() => {
            console.log(`itineraryCards: ${itineraryCards} \n...END`)
            return Promise.all(result.map((card, index) => {
                return knex('categories')
                  .select('name')
                  .where('id', card.category_id)
                  .then((data) => {
                    itineraryCards[index].category_name = data[0].name;
                  })
              }))
              .then(() => {
                console.log(`itineraryCards2: ${itineraryCards} \n...END`)
                return itineraryCards

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
