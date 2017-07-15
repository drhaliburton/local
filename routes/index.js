"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/index_queries.js")

// Test Data - Remove when DB seeded



module.exports = (knex) => {
  const {getFiltered, makeFavorite} = queries(knex);

  // Route will be "/:filter" once we implement geolocation
  router.get("/", (req, res) => {
    //The following response will be used once geolocation has been implemented

    // const lat1 = req.body.results[0].geometry.viewport.northeast.lat;
    // const lng1 =req.body.results[0].geometry.viewport.northeast.lng;
    // const lat2 =req.body.results[0].geometry.viewport.southwest.lat;
    // const lng2 =req.body.results[0].geometry.viewport.southwest.lng;
    // getFiltered(lat1, lng1, lat2, lng2)
    // .then(data => {
    //   res.render("itinerary", {cards: data})
    // })
    // .catch(err => {
    //   res.status(400).send("ERROR");
    // })

    //This is a temporary response, for testing purposes
    res.render("index")
  });

  //this route adds a favorite from the list to a user's id
  router.post("/favorites/:id", (req, res) => {

  });


  return router;
}
