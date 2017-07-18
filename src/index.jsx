require('../styles/layout.scss');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import HomepageIndex from './homepage/HomepageIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import MapIndex from './map/MapIndex.jsx';
import SignInIndex from './signin/SignInIndex.jsx';



const reactRoot = document.querySelector('#react-root');

render(
  <Router>
    <div>
      <div>
        <Navbar />
      </div>
      <Route exact path="/" component={HomepageIndex} />
      <Route path="/itinerary" component={ItineraryIndex} />
      <Route path="/map" component={MapIndex} />
      <Route path="/signin" component={SignInIndex} />
    </div>
  </Router>
  , reactRoot);