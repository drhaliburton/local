"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/index_queries.js")

const testCards = {
   cards: [{
     title: "Food Place",
     description: "Yum!",
     location: "here",
     type: "food",
     duration: 120,
     start_time: "11:00am"
   }, {
     title: "Hike Time",
     description: "Wow!",
     location: "There",
     type: "outdoors",
     duration: 180,
     start_time: "1:00pm"
   }, {
     title: "Art Place",
     description: "Cool!",
     location: "Somewhere",
     type:"sight",
     duration: 60,
     start_time: "4:00pm"
   }]
 };


module.exports = (knex) => {
  const {getFiltered, makeFavorite} = queries(knex);

  // Route will be "/:filter" once we implement geolocation
  router.get("/", (req, res) => { 
    // getIndex(location)
    // .then(result => {
    //   res.send(process(result))
    // })
    // .catch(err => {
    //   res.status(400).send("oh god no");
    // } 
    res.render("index", testCards)
  });

  router.post("/favorites/:id", (req, res) => {
    //this route adds a favorite from the list to a user's id

  });


  return router;
}
