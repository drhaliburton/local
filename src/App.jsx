require('../styles/layout.scss');

import React, {Component, forceUpdate} from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import HomepageIndex from './homepage/HomepageIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import MapIndex from './map/MapIndex.jsx';
import SignInIndex from './signin/SignInIndex.jsx';
import Api from '../library/api.js';
// import Styles from '../public/styles/layout.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  getCurrentUser() {
    Api.get('/auth/current_user')
    .then((user) => {
      this.setCurrentUser(user);
    });
    this.forceUpdate();
  }

  setCurrentUser(user) {
      this.setState({
        currentUser: user
      })
  }

  componentWillMount() {
    this.getCurrentUser();
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div>
            <Navbar setCurrentUser={this.getCurrentUser.bind(this)} currentUser={this.state.currentUser}/>
          <Route currentUser={this.state.currentUser} exact path="/" component={HomepageIndex} />
          <Route currentUser={this.state.currentUser} path="/itinerary" component={ItineraryIndex} />
          <Route currentUser={this.state.currentUser} path="/map" component={MapIndex} />
           <Route getCurrentUser={this.getCurrentUser.bind(this)} currentUser={this.state.currentUser} path="/auth" component={SignInIndex} />
        </div>
      </Router>
    );
  }
}


export default App;