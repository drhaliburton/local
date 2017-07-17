"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/index_queries.js")

// Test Data - Remove when DB seeded
const testCards = [ {
     title: "Food Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     image: "http://bulma.io/images/placeholders/480x480.png",     
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }, {
     title: "Art Place",
     image: "http://bulma.io/images/placeholders/480x480.png",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum rutrum sodales. Nullam mattis fermentum libero, non volutpat.",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }
];



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
