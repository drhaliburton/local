"use strict";
require('dotenv').config();
const express = require('express');
const router = express.Router();
const https = require('https');
const queries = require("../library/index_queries.js");
const cardQueries = require("../library/card_queries.js");
const request = require('request');

function createFlickrUrl(photoArray) {
  let photoUrlsArray = [];
  for (var obj in photoArray) {
    let item = photoArray[obj];
    let photoUrl = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`;
    photoUrlsArray.push(photoUrl);
  }
  return photoUrlsArray;
}


module.exports = (knex) => {
  const {
    getFiltered,
    makeFavorite,
    allCards
  } = queries(knex);

  const {
    postPhotos,
    postCard
  } = cardQueries(knex);

  // Route will be "/:filter" once we implement geolocation
  router.get("/", (req, res) => {
    //The following response will be used once geolocation has been implemented

    // const lat1 = req.body.results[0].geometry.viewport.northeast.lat;
    // const lng1 =req.body.results[0].geometry.viewport.northeast.lng;
    // const lat2 =req.body.results[0].geometry.viewport.southwest.lat;
    // const lng2 =req.body.results[0].geometry.viewport.southwest.lng;
    // getFiltered(lat1, lng1, lat2, lng2)
    // .then(data => {
    //   res.render("index", {cards: data})
    // })
    // .catch(err => {
    //   res.status(400).send("ERROR");
    // })

    //This is a temporary response, for testing purposes
    allCards()
      .then(data => {
        let cards = data.map((card) => {
          return {
            title: card.title,
            location: [card.location.x, card.location.y],
            description: card.description,
            duration: card.duration,
            category: card.name,
            user: card.given_name,
            photos: card.url,
            ratings: card.rating
          }
        });

        res.json(cards)

      })
      .catch(err => {
        res.status(400).send("ERROR");
      })
  });

  router.get("/locate", (req, res) => {
    const geoKey = process.env.GEO_API_KEY
    const request = encodeURIComponent(req.query.find)
    const options = {
      host: 'maps.googleapis.com',
      path: `/maps/api/geocode/json?address=${request}&key=${geoKey}`
    };

    const callback = function (response) {
      let str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        const result = JSON.parse(str).results[0];
        console.log(result);

        const lat1 = result.geometry.viewport.northeast.lat;
        const lng1 = result.geometry.viewport.northeast.lng;
        const lat2 = result.geometry.viewport.southwest.lat;
        const lng2 = result.geometry.viewport.southwest.lng;
        getFiltered(lat1, lng1, lat2, lng2)
          .then(data => {
            let cards = data.map((card) => {
              return {
                title: card.title,
                location: [card.location.x, card.location.y],
                description: card.description,
                duration: card.duration,
                category: card.name,
                user: card.given_name,
                photos: card.url,
                ratings: card.rating
              }
            })
            res.json(cards)
          })
          .catch(err => {
            res.status(400).send("ERROR");

          });
      })
    }
    https.request(options, callback).end();
  })

  router.post("/", (req, res) => {
    postCard(req.body);
    res.status(200).send("Okay");

      // grabs images from flickr based of user inputted location and posts to the database
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
        let flickrResponse = JSON.parse(body);
        let imageArray = flickrResponse.photos.photo.slice(0, 5);
        let images = createFlickrUrl(imageArray);
        postPhotos(images);
      });
  });


  router.post("/favorites/:id", (req, res) => {

  });


  return router;
}
