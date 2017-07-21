module.exports = (knex) => {

const obj = {};

  obj.postCard = function(card){
    return knex('categories')
    .where('categories.name', card.category)
    .then(results => {
      return knex('cards')
      .insert({
      title: card.title,
      description: card.description,
      duration: card.duration,
      location: card.location,
      category_id: results.id,
      user_id: card.user_id
      })
    })
  }

  obj.postPhotos = function(imageArr){
    return Promise.all(imageArr.map((image) => {
      return knex('photos')
      .insert({
        url: image,
        card_id: 1
      })
    }))
  }

  return obj;
}


