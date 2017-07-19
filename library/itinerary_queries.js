
module.exports = (knex) => {
const obj = {};

obj.getItinerary = function(user_id, date){
  knex('card')
  .where('user_id', user_id)
  .and('date', date)

}

obj.getFavorite = function(user_id){
  knex('favorite')
  .where('user_id', user_id)
}
// card is an array of card objects
obj.makeItinerary = function(day, title ,user_id, cards){
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

return obj;
}
