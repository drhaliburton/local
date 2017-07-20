"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post("/", (req, res) => {
    console.log('HI THERE', req.body)
    //Check to see if user exists
    knex('users').where({
      token: req.body.token
    })
    //If user does not exist insert them into table (WHAT INFO DO I NEED?)
    knex('users').insert({
      given_name: req.body.given_name, 
      family_name: req.body.family_name, 
      token: req.body.token,
    })
    .then( function (result) {
      //EITHER WAY - set a cookie
      res.status(200).send('All okay!');  
    })
    // TODO: cookies?
  });

  router.get('/', (req, res) => {
    res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
})


  return router;
}