"use strict";

const express = require('express');
const router  = express.Router();

module.exports = () => {

  router.post("/auth", (req, res) => {
    console.log(req.params)
    res.status(200).send('All okay!');
  });


  router.get('/auth', (req, res) => {
    res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
})


  return router;
}