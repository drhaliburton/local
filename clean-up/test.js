 const request = require('request');

function createImageUrl(placesArray) {
  let photoUrlsArray = [];
  for (var obj in placesArray) {
    let photos = placesArray[obj].photos;
    for (var photo in photos) {
      let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[photo].photo_reference}&key=${process.env.GOOGLE_PLACES_API_KEY}`;
      photoUrlsArray.push(photoUrl);
    }
  }
  console.log(photoUrlsArray);
  return photoUrlsArray;
}

 request({
         url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
          qs: {
            key: 'AIzaSyDwi0UJmnrYmkmT8WmZsLdThgH-8Z8ZnZE',
            radius: 50,
            location: '49.28184419999999, -123.1081617',
            keyword: 'Lighthouse Labs'
          }
      }, (err, res, body) => {
      let placesResponse = JSON.parse(body);
      let placesArray = placesResponse.results.slice(0, 5);
      let images = createImageUrl(placesArray);

      });