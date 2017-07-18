<<<<<<< HEAD
"use strict";

const express = require('express');
const router  = express.Router();
const https = require('https');
const queries = require("../library/index_queries.js")

module.exports = (knex) => {
  const {getFiltered, makeFavorite, allCards} = queries(knex);

  // Returns all cards on loading Homepage
  router.get("/", (req, res) => {

    allCards()
    .then(data => {
      let cards = data.map((card) =>{
       return {
          title: card.title,
          location: [card.location.x, card.location.y],
          description: card.description,
          duration: card.duration,
          category: card.name,
          user: card.given_name
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

  const callback = function(response) {
    var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(JSON.parse(str).results[0]);
    console.log(options.path);
    });
  }
  https.request(options, callback).end();
  });
    //The following response will be used once geolocation has been implemented

    // const lat1 = req.body.results[0].geometry.viewport.northeast.lat;
    // const lng1 =req.body.results[0].geometry.viewport.northeast.lng;
    // const lat2 =req.body.results[0].geometry.viewport.southwest.lat;
    // const lng2 =req.body.results[0].geometry.viewport.southwest.lng;
    // getFiltered(lat1, lng1, lat2, lng2)
    // .then(data => {
    // let cards = data.map((card) =>{
    //  return {
    //       title: card.title,
    //       location: [card.location.x, card.location.y],
    //       description: card.description,
    //       duration: card.duration
    //      }
    //  res.json({cards: data})
    // })
    // .catch(err => {
    //   res.status(400).send("ERROR");
     

  

  router.post("/favorites/:id", (req, res) => {

  });


  return router;
}
=======
"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/index_queries.js")

module.exports = (knex) => {
  const {getFiltered, makeFavorite, allCards} = queries(knex);

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
      let cards = data.map((card) =>{
       return {
          title: card.title,
          // location: card.location,
          description: card.description,
          duration: card.duration
         }
      });
      console.log(cards)
      res.json(cards)
      
    })
    .catch(err => {
      res.status(400).send("ERROR");
    })
  });

  //this route adds a favorite from the list to a user's id
  router.post("/favorites/:id", (req, res) => {

  });


  return router;
}
>>>>>>> d1fd5f35f7ccff2d6aa1eb5ac79fb0124d918e52
