const request = require('request');

request({
  url: 'https://api.flickr.com/services/rest/',
  qs: {
    method: 'flickr.photos.search',
    api_key: process.env.FLICKR_API_KEY,
    tags: 'travel',
    radius: 32,
    lat: 49.120175,
    lon: -122.969971,
    format: 'json',
    nojsoncallback: 1
  }
}, (err, res, body) => {
  console.log(JSON.parse(body));
});