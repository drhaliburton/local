// server.js
require('dotenv').config();
const ENV         = process.env.ENV || "development";
const express = require('express');
const SocketServer = require('ws').Server;
const knexConfig  = require('../knexfile');
const knex        = require('knex')(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');


// Set the port to 3001
const PORT = 3001;
// Seperated Routes for each Resource
const itineraryRoutes = require("./routes/itinerary");
const indexRoutes = require("./routes/index");
const calendarRoutes = require("./routes/export")


// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .use(morgan('dev'))
  .use(knexLogger(knex))
  .use("/itinerary", itineraryRoutes(knex))
  .use("/index",indexRoutes(knex))
  .use("/export", calendarRoutes(knex))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('******Client connected******');

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => console.log('Client disconnected'));
});