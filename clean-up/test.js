 const request = require('request');

function createImageUrl(placesArray) {
  let photoUrlsArray = [];
  for (var obj in placesArray) {
    let photos = placesArray[obj].photos;
    for (var photo in photos) {
      let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photos[photo].photo_reference}&key=AIzaSyDwi0UJmnrYmkmT8WmZsLdThgH-8Z8ZnZE`;
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
            location: '44.650544, -63.5491027'
          }
      }, (err, res, body) => {
      let placesResponse = JSON.parse(body);
      let placesArray = placesResponse.results.slice(0, 5);
      let images = createImageUrl(placesArray);

      // request({
      //    url: 'https://maps.googleapis.com/maps/api/place/photo',
      //     qs: {
      //       key: 'AIzaSyDwi0UJmnrYmkmT8WmZsLdThgH-8Z8ZnZE',
      //       photoreference: photoReference,
      //       maxwidth: 1200
      //     }
      //   }, (err, res, body) => {
      //     let photoResponse = body;
      //     // let imageArray = flickrResponse.photos.photo.sort();
      //     // let images = createFlickrUrl(imageArray);
      //     console.log(photoResponse);
      //     // postPhotos(images);
      //   });

      });