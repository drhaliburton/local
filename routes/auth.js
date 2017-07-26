'use strict';

const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    //Check to see if user exists
    knex('users').where({
      googleId: req.body.googleId
    }).select('id')
      .then(x => { console.log('-- 1 - selected [{id}] maybe', x); return x; })
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
        if (result) {
          req.session.userId = result[0];
          req.session.givenName = req.body.givenName;
          req.session.token = req.body.token;
        } else {
          res.status(500).send('Bad');
        }
        res.status(200).send('All okay!');
      })
      .catch(function (err) {
        console.log('somebody had an error in signin POST stuff', err);
      })
  });

  router.post('/logout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });

  router.get('/current_user', (req, res) => {
    if (!req.session.userId) {
      return res.json(null);
    }
    res.json({
      givenName: req.session.givenName,
      token: req.session.token
    }).status(200);
  });

  //   router.get('/', (req, res) => {
  //     res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
  // })


  return router;
}