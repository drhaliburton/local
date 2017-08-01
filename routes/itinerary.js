const express = require('express');
const router = express.Router();
const queries = require("../library/itinerary_queries.js")

module.exports = (knex) => {

  const {
    favCards,
    getItinerary,
    makeItinerary,
    delFavorite,
    delItnCard
  } = queries(knex);

  router.get("/cards", (req, res) => {
    const user_id = req.session.userId;

    if (!user_id) {
      res.json({
        status: 'userID does not exist'
      })
      return
    } else {
      getItinerary(user_id)
        .then(data => {
          let cards = data.map((card) => {
            return {
              id: card.card_id,
              itinerary_id: card.itn_id,
              itnCardId: card.itn_card_id,
              user_id: card.user_id,
              title: card.title,
              location: card.location,
              address: card.address,
              description: card.description,
              duration: card.duration,
              date: card.date,
              category_id: card.category_id,
              category: card.category_name,
              photos: card.photos
            }
          });

          res.json(cards);

        })
        .catch(err => {
          res.status(400).send("ERROR");
        })
    }
  });


  router.get("/favorites", (req, res) => {
    const user_id = req.session.userId;
    if (!user_id) {
      res.json({
        status: 'userID does not exist'
      })
      return
    } else {
      favCards(user_id)
        .then(data => {
          let cards = data.map((card) => {
            return {
              id: card.card_id,
              title: card.title,
              location: [card.location.x, card.location.y],
              description: card.description,
              duration: card.duration,
              address: card.address,
              category: card.category_id,
              photos: card.photos
            }
          });

          res.json(cards);

        })
        .catch(err => {
          res.status(400).send("ERROR");
        })
    }
  });

  router.post("/favorite", (req, res) => {

    const userId = req.session.userId;
    const cardId = req.body.cardId;

    if (!userId) {
      res.json({
        status: 'userID does not exist'
      })
      return
    } else {
      delFavorite(cardId, userId)
        .then(() => {
          res.json({
            status: 'ok'
          })
        })
        .catch(err => {
          res.status(400).send("ERROR");
        });
    }
  })


  router.post('/cards', (req, res) => {
    const userId = req.session.userId;
    const cardIds = req.body.cardIds;
    const date = req.body.date;

    if (!userId || cardIds.includes(null)) {
      res.json({
        status: 'Missing userID and/or cardID'
      })
      return
    } else {

      makeItinerary(date, cardIds, userId)
        .then(() => {
          res.json({
            status: 'ok'
          })
        })
        .catch(err => {
          res.status(400).send("ERROR");
        });
    }
  })

  router.get("/map", (req, res) => {
    function initMap() {
      var places = [{
          lat: -25.0264017,
          lng: 115.1772893
        },
        {
          lat: -25.363,
          lng: 131.044
        },
        {
          lat: -33.8470219,
          lng: 150.3715133
        },
        {
          lat: -37.971237,
          lng: 144.4926879
        }
      ]

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: places[0]
      })

      places.forEach(function (geolocation) {
        var marker = new google.maps.Marker({
          position: places.geolocation,
          map: map
        })
      })
      return map;
    }
    res.render("maps")
  });

  router.post("/delete", (req, res) => {
    const itnCardID = req.body.itnCardID;
    const userID = req.session.userId;
    if (!userID) {
      res.json({
        status: 'userID does not exist'
      })
      return
    } else {
      delItnCard(itnCardID)
        .then(() => {
          res.json({
            status: 'ok'
          })
        })
        .catch(err => {
          res.status(400).send("ERROR");
        });
    }
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
