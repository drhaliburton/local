require('../styles/layout.scss');

import React, {Component} from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Navbar from './nav/Navbar.jsx';
import HomepageIndex from './homepage/HomepageIndex.jsx';
import ItineraryIndex from './itinerary/ItineraryIndex.jsx';
import MapIndex from './map/MapIndex.jsx';
import SignInIndex from './signin/SignInIndex.jsx';
import SortableComponent from './dnd/SortableComponent.jsx';
import AddCard from './addcard/addCardForm.jsx';
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
    Api.get(`/auth/current_user`)
    .then((user) => {
      this.setState({
        currentUser: user
      })
    });
  }
  setCurrentUser(user) {
      this.setState({
        currentUser: user
      })
  }

  componentWillMount() {
    this.getCurrentUser();
  }

  render() {
    console.log('over here?', this.state.currentUser)
    return (
      <Router>
        <div>
          <div>
            <Navbar getCurrentUser={this.getCurrentUser.bind(this)} currentUser={this.state.currentUser}/>
          </div>
          <Route currentUser={this.state.currentUser} exact path="/" component={HomepageIndex} />
          <Route currentUser={this.state.currentUser} exact path="/add" component={AddCard} />
          <Route currentUser={this.state.currentUser} path="/itinerary" component={ItineraryIndex} />
          <Route currentUser={this.state.currentUser} path="/map" component={MapIndex} />
          <Route getCurrentUser={this.getCurrentUser.bind(this)} setCurrentUser={this.setCurrentUser.bind(this)} currentUser={this.state.currentUser} path="/auth" component={SignInIndex} />
        </div>
      </Router>
    );
  }
}


export default App;