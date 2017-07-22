"use strict";

const express = require('express');
const router  = express.Router();
const queries = require("../library/itinerary_queries.js")

module.exports = (knex) => {

  // const {} = queries(knex);

  router.get("/:id/new", (req, res) => {
   //New itinerary form
   //Need user favorites
  });

  //Will be "/:id/:date" after testing
  router.get("/", (req, res) => {
  //knex query retrieves email from user 
    knex('users').where({
        id: req.session.userId
      }).select('token')
      .then(result => {
        console.log('oh hai token itinerary ', result[0].token)
      })
  
    //View specific Itinerary
  //Link from Navbar
    res.render("itinerary")
  });

  router.post('/'), 

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

// {
//  "kind": "calendar#calendarList",
//  "etag": "\"p33c9bvcotv7d60g\"",
//  "nextSyncToken": "CNiV_ZjvztMCEiFzaGF1bmEuaGVubmVzc3kuZ3JpZmZpbkBnbWFpbC5jb20=",
//  "items": [
//   {
//    "kind": "calendar#calendarListEntry",
//    "etag": "\"1489359467472000\"",
//    "id": "shauna.hennessy.griffin@gmail.com",
//    "summary": "shauna.hennessy.griffin@gmail.com",
//    "timeZone": "UTC",
//    "colorId": "14",
//    "backgroundColor": "#9fe1e7",
//    "foregroundColor": "#000000",
//    "selected": true,
//    "accessRole": "owner",
//    "defaultReminders": [
//     {
//      "method": "popup",
//      "minutes": 30
//     }
//    ],
//    "notificationSettings": {
//     "notifications": [
//      {
//       "type": "eventCreation",
//       "method": "email"
//      },
//      {
//       "type": "eventChange",
//       "method": "email"
//      },
//      {
//       "type": "eventCancellation",
//       "method": "email"
//      },
//      {
//       "type": "eventResponse",
//       "method": "email"
//      }
//     ]
//    },
//    "primary": true
//   }
//  ]
// }
// RFC3339
// 2008-09-08T22:47:31-07:00