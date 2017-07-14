"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/:filter", (req, res) => {
     // this route should be used to filter through the results
  });

  router.post("/favorites/:id", (req, res) => {
    //this route adds a favorite from the list to a user's id

  });


  return router;
}
