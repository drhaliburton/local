"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/itinerary_queries.js")

module.exports = (knex) => {

  const {
    favCards
    } = queries(knex);

  router.get("/:id/new", (req, res) => {
   //New itinerary form
   //Need user favorites
  });

  //Will be "/:id/:date" after testing
  router.get("/favorites", (req, res) => {
    let user_id = 1;

      favCards(user_id)
        .then(data => {
          let cards = data.map((card) => {
            console.log(data, card);
            return {
              id: card.id,
              card_id: card.card_id,
              user_id: card.user_id,
              title: card.title,
              location: card.location,
              description: card.description,
              duration: card.duration,
              category_id: card.category_id,
            }
          });
          res.json(cards);

        })
        .catch(err => {
        res.status(400).send("ERROR");
        })
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
