
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

// add get map query after google api
return obj;
}
