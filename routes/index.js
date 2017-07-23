"use strict";
require('dotenv').config();
const express = require('express');
const router = express.Router();
const https = require('https');
const queries = require("../library/index_queries.js");
const cardQueries = require("../library/card_queries.js");
const request = require('request');
const cookieSession = require('cookie-session');


module.exports = (knex) => {
  const {
    getFiltered,
    addFavorite,
    allCards
  } = queries(knex);

  const {
    postPhotos,
    postCard,
    findPlacePhotos
  } = cardQueries(knex);

  // Route will be "/:filter" once we implement geolocation
  router.get("/", (req, res) => {
    //The following response will be used once geolocation has been implemented


    //This is a temporary response, for testing purposes
    allCards()
      .then(data => {
        let cards = data.map((card) => {
          return {
            id: card.card_id,
            title: card.title,
            location: [card.location.x, card.location.y],
            description: card.description,
            duration: card.duration,
            category: card.category_name,
            user: card.given_name,
            photos: card.photos,
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
                id: card.id,
                title: card.title,
                location: [card.location.x, card.location.y],
                description: card.description,
                duration: card.duration,
                category: card.category_name,
                user: card.given_name,
                photos: card.photos,
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
    const userID = req.session.userId;
    console.log('post userID: ', userID);

    // postCard(req.body);
    res.status(200).send("Okay");
    // postPhotos(images);

  });




      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        const result = JSON.parse(str).results[0];
        newCard.location = `(${result.geometry.location.lat}, ${result.geometry.location.lng})`
        const photosArray = findPlacePhotos(result);
        console.log('server id: ', userID);
      postCard(newCard, userID)
        .then(([cardID]) => {
          return photosArray
          .then((images) => {
            postPhotos(images, cardID);
          })
            .then(() => {
            res.json({
              status: 'ok'
            });
          })
        })
        .catch(err => {
          res.status(400).send("ERROR");
        })
      })
    }
    https.request(options, callback).end();



  router.post("/favorite", (req, res) => {
    console.log(req.body.id)
    res.json({
      status: 'ok'
    });
  });


  return router;
}
