module.exports = (knex) => {

  const obj = {};

  obj.postCard = function (card) {
    return knex('categories')
      .where('name', card.category)
      .then(rows => {
        return knex('cards')
          .insert({
            title: card.title,
            description: card.description,
            duration: card.duration,
            location: card.location,
            category_id: rows[0].id,
            user_id: card.user_id
          })
           .returning('id')
      })
  }

  obj.postPhotos = function (imageArr) {
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
