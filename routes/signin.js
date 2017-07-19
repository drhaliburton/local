"use strict";

const express = require('express');
const router  = express.Router();

module.exports = () => {
const obj = {};

obj.postAccessToken = function(object){
    return knex('users')
      .insert({name: object.category})
      .returning('id')
      .then(function (response){
        return knex('card_categories')
        .returning('id')
        .insert({category_id: response[0]})
      })
  }

  router.post("/auth", (req, res) => {
    console.log(req.params)
    knex.insert
    //TO DO add sql injection for new user
    res.status(200).send('All okay!');
  });


  router.get('/auth', (req, res) => {
    res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
})


  return router;
}