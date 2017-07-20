module.exports = (knex) => {

 function returnCategoryId(category){
    let categoryIdMap = {
      Nature: 1,
      Shopping: 2,
      Food: 3,
      Sights: 4
    }
    return categoryIdMap[category];
  }

const obj = {};

  obj.postCardCategory = function(object){
    console.log('Catergory!!!');
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
    let category = returnCategoryId(object.category);
    return knex('cards')
      .insert({
        title: object.title,
        // location: object.location,
        description: object.description,
        duration: object.duration,
        category_id: category
      })
      .returning('id')
      .then(function (response){
        return knex('card_categories')
          .returning('id')
          .insert({card_id: response[0]})
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