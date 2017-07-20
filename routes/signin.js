"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log('HI THERE', req.body)
     knex('users').insert({
      given_name: req.body.given_name, 
      family_name: req.body.family_name, 
      token: req.body.token,
    })
      .then( function (result) {
          res.status(200).send('All okay!');  
       })
  });

  router.get('/', (req, res) => {
    res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
})


  return router;
}