require('../styles/layout.scss');

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import App from './App.jsx';

// import Styles from '../public/styles/layout.css';

const reactRoot = document.querySelector('#react-root');

if (module.hot) {
  module.hot.accept();
}

render(
  <App />
  , reactRoot);