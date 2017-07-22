"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log("YO", req.body)
    //Check to see if user exists
    knex('users').where({
      googleId: req.body.googleId
    }).select('id')
    .then(userResult => {
      if (userResult.length > 0) {
        return [userResult[0].id];

      } else {
        //If user does not exist insert them into table (WHAT INFO DO I NEED?)
        return knex('users').insert({
          given_name: req.body.givenName,
          family_name: req.body.familyName,
          googleId: req.body.googleId,
          email: req.body.email,
          token: req.body.token,
        }).returning('id')
      }
    })
    .then(function (result) {
      if(result) {
        req.session.userId = result[0];
        if (req.body.givenName) {
          req.session.givenName = req.body.givenName;
        }
        if (req.body.token){
          req.session.token = req.body.token;
          console.log('that session token yo - ', req.session.token)
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
    req.session = null;
    res.redirect('/');
  });

  router.get("/current_user", (req, res) => {
    if (!req.session.userId) {
      return res.json(null);
    } 
    res.json({
      givenName: req.session.givenName,
      token: req.session.token
    })
  }); 

//   router.get('/', (req, res) => {
//     res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
// })


  return router;
}