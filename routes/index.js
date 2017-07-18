"use strict";

const express = require('express');
const router = express.Router();
const https = require('https');
const queries = require("../library/index_queries.js")

module.exports = (knex) => {
  const {
    getFiltered,
    makeFavorite,
    allCards
  } = queries(knex);

  // Returns all cards on loading Homepage
  router.get("/", (req, res) => {

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
    const request = encodeURIComponent(req.query.find)
    const options = {
      host: 'maps.googleapis.com',
      path: `/maps/api/geocode/json?address=${request}&key=AIzaSyB22qjpq0UBNYjBGhPNBhbgEgHfzRWWtaY`
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



  router.post("/favorites/:id", (req, res) => {

  });


  return router;
}
