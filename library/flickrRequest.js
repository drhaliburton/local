const request = require('request');

request({
  url: 'https://api.flickr.com/services/rest/',
  qs: {
    method: 'flickr.photos.search',
    api_key: '6c2b0623a0f25f7d7f7eb362f7c44fb0',
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