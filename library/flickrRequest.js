const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/output',
  qs: {
    method: 'flickr.photos.search',
    key: 'AIzaSyDwi0UJmnrYmkmT8WmZsLdThgH-8Z8ZnZE',
    location: '49.120175, -122.969971'
  }
}, (err, res, body) => {
  console.log(JSON.parse(body));
});