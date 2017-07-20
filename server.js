
"use strict";

require('dotenv').config();

// const PORT        = process.env.PORT || 8080;
const webpack = require('webpack');
const config = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const cookieSession = require('cookie-session')

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const PORT = 3000;
// Seperated Routes for each Resource
const itineraryRoutes = require("./routes/itinerary");
const indexRoutes = require("./routes/index");
const signInRoutes = require("./routes/signin");
//
const compiler = webpack(config)
const path = require('path')
const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'build'));
//
const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'session',
  keys: ['kjhkjhkjgutuyghhgd', 'jgjhghyr'],

  // Cookie Options
  // maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(webpackDevMiddleware(compiler, {
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
      ignored: /node_modules/
    },
    publicPath: config.output.publicPath
  }))
app.use(webpackHotMiddleware(compiler))
app.use('/build', publicPath);
app.use(morgan('dev'))
app.use(knexLogger(knex))
app.get('/', function (req, res) { res.sendFile(indexPath) });
app.use("/itinerary", itineraryRoutes(knex))
app.use("/index", indexRoutes(knex))
app.use("/signin", signInRoutes(knex))


app.listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));
