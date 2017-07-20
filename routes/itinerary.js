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

  router.get("/map", (req, res) => {
    // function initMap() {
    // var places = [
    //   {lat: -25.0264017, lng: 115.1772893},
    //   {lat: -25.363, lng: 131.044},
    //   {lat: -33.8470219, lng: 150.3715133},
    //   {lat:-37.971237, lng: 144.4926879}
    //   ]

    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 4,
    //     center: places[0]
    //   })

    //   places.forEach(function(geolocation){
    //     var marker = new google.maps.Marker({
    //       position: places.geolocation,
    //       map: map
    //     })
    //   })
    // return map;
    // }


    res.render("maps")
  });

  router.post("/:id", (req, res) => {
  // Save itinerary to DB
  // Form will include favorite.card_id, itinerary-card.start_time, itinerary.date
  // Delete each card used from favorite
  });

  return router;
}
