"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:id/new", (req, res) => {
   //New invenventory form
   //Need user favorites
  });

  router.get("/:id/:date", (req, res) => {
  //View specific Itinerary
  //Link from Navbar?
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
