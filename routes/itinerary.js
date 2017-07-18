"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/itinerary_queries.js")

module.exports = (knex) => {

  const {} = queries(knex);

  router.get("/:id/new", (req, res) => {
   //New itinerary form
   //Need user favorites
  });

  //Will be "/:id/:date" after testing
  router.get("/", (req, res) => {
  //View specific Itinerary
  //Link from Navbar
    res.render("itinerary", testItn)
  });

  router.get("/:id/:date/map", (req, res) => {
  //View map containing all locations from an itinerary
  //Give location cooridinates to Google maps api
  });

  router.post("/:id", (req, res) => {
  // Save itinerary to DB
  // Form will include favorite.card_id, itinerary-card.start_time, itinerary.date
  // Delete each card used from favorite
  });

  return router;
}
