
module.exports = (knex) => {
const obj = {};

obj.postCardCategory = function(object){
    return knex('categories')
      .insert({name: object.category})
      .returning('id')
      .then(function (response){
        return knex('card_categories')
        .returning('id')
        .insert({category_id: response[0]})
      })
  }

  obj.postCard = function(object){
    return knex('cards')
      .insert({
        title: object.title,
        location: object.location,
        description: ,
        duration: object.duration,
        user_id: object.user_id
      })
      .returning('id')
      .then(function (response){
        return knex('card_categories')
          .returning('id')
          .insert({card_id: response[0]})
        })
  }

  return obj;
}