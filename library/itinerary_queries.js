module.exports = (knex) => {
  const obj = {};

  obj.getItinerary = function (user_id) {

    return knex('itineraries')
      .where('user_id', user_id)
      .select('itineraries.id AS itn_id', 'itineraries.user_id', 'itineraries.date', 
      'itinerary_cards.card_id', 'itinerary_cards.id AS itn_card_id')
      .leftJoin('itinerary_cards', 'itineraries.id', 'itinerary_cards.itinerary_id')
      .then((result) => {
        const itineraryCards = result;
        return Promise.all(result.map((card, index) => {
            return knex('cards')
              .where('id', card.card_id)
              .select(['cards.title', 'cards.description', 'cards.location', 'cards.duration',
                'cards.address', 'cards.category_id'
              ])
              .then((data) => {
                itineraryCards[index].title = data[0].title;
                itineraryCards[index].description = data[0].description;
                itineraryCards[index].duration = data[0].duration;
                itineraryCards[index].location = data[0].location;
                itineraryCards[index].address = data[0].address;
                itineraryCards[index].category_id = data[0].category_id;
              })
          }))
          .then(() => {
            return Promise.all(result.map((card, index) => {
                return knex('photos')
                  .where('card_id', card.card_id)
                  .select(knex.raw('ARRAY_AGG(photos.url) as photo_urls'))
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
                    return itineraryCards

                  })
              })
          })
      })
  }
  // card is an array of card objects
  obj.makeItinerary = function (date, cardIds, userID) {

    return knex('itineraries')
      .del()
      .where('user_id', userID)
      .then(() => {
        return knex('itineraries')
          .insert({
            date: date,
            user_id: userID
          })
          .returning('id')
      })
      .then((id) => {
        return Promise.all(cardIds.map((cardId) => {
          return knex('itinerary_cards')
            .insert({
              itinerary_id: id[0],
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

  obj.delFavorite = function (cardId, userId) {
    return knex('favorites')
      .where('user_id', userId)
      .andWhere('card_id', cardId)
      .del()
  }
  obj.delItnCard = function (itnCardId) {
    return knex('itinerary_card')
      .where('id', itnCardId)
      .del()
  }

  return obj;
}
