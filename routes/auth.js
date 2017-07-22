"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    //Check to see if user exists
    knex('users').where({
      googleId: req.body.googleId
    }).select('id')
    .then(userResult => {
      if (userResult.length > 0) {
        return [userResult[0].id];  // Surely there's a better way
                                    // There's no better way, and stop calling me Shirley
      } else {
        //If user does not exist insert them into table (WHAT INFO DO I NEED?)
        return knex('users').insert({
          given_name: req.body.given_name,
          family_name: req.body.family_name,
          googleId: req.body.googleId,
        }).returning('id')
      }
    })
    .then(function (result) {
      if(result.length > 0) {
        req.session.userId = result[0];
        if (req.body.given_name) {
          req.session.givenName = req.body.given_name;
        }
        res.status(200).send('All okay!');
      } else {
        res.status(500).send('Bad');
      }
    })
    .catch(function (err){
      console.log("somebody had an error in signin POST stuff", err);
    })
  });


  router.post("/logout", (req, res) => {
    req.params.userId = null;
    res.redirect('/');
  });

//   router.get('/', (req, res) => {
//     res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
// })


  return router;
}