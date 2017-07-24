const request = require('request');


module.exports = (knex) => {

  const obj = {};

  obj.postCard = function (card, userId) {
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
            user_id: userId
          })
          .returning('id')
      })
  }

  obj.postPhotos = function (imageArr, cardId) {
    return Promise.all(imageArr.map((image) => {
      return knex('photos')
        .insert({
          url: image,
          card_id: cardId
        })
    }))
  }

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  obj.createImageUrl = function (placesArray) {
    let photoUrlsArray = [];
    for (var obj in placesArray) {
      let photos = placesArray[obj].photos;
      for (var photo in photos) {
        let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${photos[photo].photo_reference}&key=${process.env.GOOGLE_PLACES_API_KEY}`;
        photoUrlsArray.push(photoUrl);
      }
    }
    let uniquePhotosArray = photoUrlsArray.filter(onlyUnique);
    return uniquePhotosArray;
  }

  obj.findPlacePhotos = function (result) {
    return new Promise(function (resolve, reject) {
      request({
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        qs: {
          key: process.env.GOOGLE_PLACES_API_KEY,
          radius: 1000,
          location: `${result.geometry.location.lat}, ${result.geometry.location.lng}`,
          keyword: result.address_components[0].long_name
        }
      }, (err, res, body) => {
        let placesResponse = JSON.parse(body);
        let placesArray = placesResponse.results.slice(0, 5);
        let images = obj.createImageUrl(placesArray);
        console.log(images)
        resolve(images);
      });
    });
  }

    obj.getFinalImageURL = function (imageArray) {
      return Promise.all(imageArr.map((image) => {
      return request({
        url: image
      }, (err, res, body) => {
        let imageURLs = JSON.parse(body);
        console.log(imageURLs)
        resolve(imageURLs);
      });
    }));
  }

return obj;
}
