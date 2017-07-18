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
