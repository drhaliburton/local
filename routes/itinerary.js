"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/itinerary_queries.js")
// Test Data - Remove when DB seeded
const testItn = {
  title: "My Trip",
  date: "July 22, 2017",
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
    type: "sight",
    duration: 60,
    start_time: "4:00pm"
  }]
};
// Test Data - Remove when DB seeded
const testFavs = {
  favs: [{
    title: "Food Place",
    description: "Yum!",
    location: "here",
    type: "food",
    duration: 120,
    start_time: "11:00am"
  },
  {
    title: "Hike Time",
    description: "Wow!",
    location: "There",
    type: "outdoors",
    duration: 180,
    start_time: "1:00pm"
  },
  {
    title: "Art Place",
    description: "Cool!",
    location: "Somewhere",
    type: "sight",
    duration: 60,
    start_time: "4:00pm"
  }]
};

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
