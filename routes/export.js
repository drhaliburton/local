"use strict";
//TODO: Extract google calendar id from users table 
//TODO: Create function that saves an event to calendar

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log("SESSSSHHHH", req.session.userId)
    //Check to see if user exists
    knex('users').where({
      id: req.session.userId
    }).select('email')
    .then(emailResult => {
      console.log('oh hai email ', emailResult.email)
    })
      // if (emailResult.length > 0) {
      //   return [emailResult[0].email];  
      
      //If user does not exist insert them into table 
      
    // } else {
    //     return knex('users').insert({
    //       given_name: req.body.given_name, 
    //       family_name: req.body.family_name, 
    //       googleId: req.body.googleId,
    //       email: req.body.email,
    //     }).returning('id')
    //   }
    // })
    .then(function (result) {
      if(result.length > 0) {
        res.status(200).send('All okay!');  
      } else {
        res.status(500).send('Bad');  
      }
    })
    .catch(function (err){
      console.log("somebody had an error retrieving email", err);
      res.status(500).send('Bad'); 
    })
  });

//   router.get('/', (req, res) => {
//     res.send(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${req.body.tokenId}`)
// })


  return router;
}