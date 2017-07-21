const request = require('request');

module.exports = (knex) => {

  const obj = {};

  obj.postCard = function (card) {
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

  obj.postPhotos = function (imageArr, cardId) {
    console.log('POST PHOTOS: ', imageArr);
    return Promise.all(imageArr.map((image) => {
      return knex('photos')
        .insert({
          url: image,
          card_id: 1
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
    console.log('CREATE IMAGE URL: ', uniquePhotosArray);
    return photoUrlsArray;
  }

  obj.findPlacePhotos = function (result) {
    return new Promise(function (resolve, reject) {
      request({
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        qs: {
          key: process.env.GOOGLE_PLACES_API_KEY,
          radius: 400,
          location: `${result.geometry.location.lat}, ${result.geometry.location.lng}`,
          keyword: result.address_components.long_name
        }
      }, (err, res, body) => {
        let placesResponse = JSON.parse(body);
        console.log(placesResponse);
        let placesArray = placesResponse.results.slice(0, 5);
        let images = obj.createImageUrl(placesArray);
        console.log('FIND PLACE PHOTOS: ', images);
        resolve(images);
      });
    });
  }

  return obj;
}


