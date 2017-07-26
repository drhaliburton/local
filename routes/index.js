require('dotenv').config();
const express = require('express');
const router = express.Router();
const https = require('https');
const queries = require("../library/index_queries.js");
const cardQueries = require("../library/card_queries.js");
const request = require('request');
const cookieSession = require('cookie-session');


module.exports = (knex) => {
  const {
    getFiltered,
    addFavorite,
    allCards,
    postUpvote,
    postDownvote,
    hasVoted
  } = queries(knex);

  const {
    postPhotos,
    postCard,
    findPlacePhotos,
    getFinalImageURL
  } = cardQueries(knex);


  router.get("/", (req, res) => {

    allCards()
      .then(data => {
        let cards = data.map((card) => {
          return {
            id: card.card_id,
            title: card.title,
            location: [card.location.x, card.location.y],
            description: card.description,
            duration: card.duration,
            address: card.address,
            category: card.category_name,
            user: card.given_name,
            photos: card.photos,
            rating: card.total_rating
          }
        });
        res.json(cards)
      })
      .catch(err => {
        res.status(400).send("ERROR");
      })
  });

  router.get("/locate", (req, res) => {
    const geoKey = process.env.GEO_API_KEY
    const request = encodeURIComponent(req.query.find)
    const options = {
      host: 'maps.googleapis.com',
      path: `/maps/api/geocode/json?address=${request}&key=${geoKey}`
    };

    const callback = function (response) {
      let str = '';

      //another chunk of data has been recieved, so append it to `str`
      response.on('data', function (chunk) {
        str += chunk;
      });

      //the whole response has been recieved, so we just print it out here
      response.on('end', function () {
        const result = JSON.parse(str).results[0];

        const lat1 = result.geometry.viewport.northeast.lat;
        const lng1 = result.geometry.viewport.northeast.lng;
        const lat2 = result.geometry.viewport.southwest.lat;
        const lng2 = result.geometry.viewport.southwest.lng;
        if (lng1) {
        getFiltered(lat1, lng1, lat2, lng2)
          .then(data => {
            let cards = data.map((card) => {
              return {
                id: card.card_id,
                title: card.title,
                location: [card.location.x, card.location.y],
                description: card.description,
                duration: card.duration,
                address: card.address,
                category: card.category_name,
                user: card.given_name,
                photos: card.photos,
                rating: card.total_rating
              }
            })
            res.json(cards)
          })
          .catch(err => {
            res.status(400).send("ERROR");

          });
        } else {
          res.rendirect('/');
        }
      })
    }
    https.request(options, callback).end();
  })

  router.post("/upvote", (req, res) => {
    let card_id = req.body['cardID'];
    let user_id = req.session.userId;

    console.log("******The card id is " + card_id)
    postUpvote(card_id, user_id)
      .then(() => {
        res.json({
          status: 'okay'
        })
      })
      .catch(err => {
        res.status(400).send("ERROR in upvoting");
      });

    // if(hasVoted(card_id, user_id)){
    //   console.log('has voted already')
    // }
    // else{
    //   postUpvote(card_id, user_id)
    //     .then((result)=>{
    //         res.json({status: 'okay', data: result})
    //     })
    //     .catch(err => {
    //         res.status(400).send("ERROR in upvoting");
    //       });
    // // }
    // else{
    //   res.redirect('/#/auth');
    // }
    // postUpvote(card_id, user_id)
    //   .then((result) => {
    //   })
    //   .catch(err => {
    //     res.status(400).send("ERROR in upvoting");

    // });
  });


  router.post("/downvote", (req, res) => {
    let card_id = req.body['cardID'];
    let user_id = req.session.userId;
    console.log("******The card id is " + card_id)

    // if(hasVoted(card_id, user_id)){
    //   console.log('has voted already')

    postDownvote(card_id, user_id)
      .then(() => {
        res.json({
          status: 'okay'
        })
      })
      .catch(err => {
        res.status(400).send("ERROR in downvoting");
      });
    // =======
    //       .then((result)=>{
    //           res.json({status: 'okay', data: result})
    //       })
    //       .catch(err => {
    //           res.status(400).send("ERROR in downvoting");
    // >>>>>>> 94befa7ab7077db67cd17ba38f014077c370141f


    //  } else {
    //    console.log('User has already downvoted');
    // }
    // else{
    //   res.redirect('/');
    // }
  });

  router.post("/", (req, res) => {

    const userID = req.session.userId;
    const geoInfo = req.body.location.gmaps
    const newCard = {
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      category: req.body.category,
      user_id: req.session.userId,
      location: `(${geoInfo.geometry.location.lat}, ${geoInfo.geometry.location.lng})`,
      address: geoInfo.formatted_address
    }

    postCard(newCard, userID)
      .then(([cardID]) => {
        findPlacePhotos(geoInfo)
          .then((images) => {
            postPhotos(images, cardID);
          })
          .then(() => {
            res.json({
              status: 'ok'
            });
          })
      })
      .catch(err => {
        res.status(400).send("ERROR");
      })
  });

  router.post("/favorite", (req, res) => {

    const userId = req.session.userId;
    const cardId = req.body.id;
    addFavorite(cardId, userId)
      .then(() => {
        res.json({
          status: 'ok'
        })
      })
      .catch(err => {
        res.status(400).send("ERROR");
      });
  })


  return router;
}
