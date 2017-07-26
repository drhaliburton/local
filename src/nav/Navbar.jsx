import React, { Component } from 'react';
import Api from '../../library/api.js';
import AddCard from "./AddCard.jsx";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


//Importing filters and searchbar components

class Navbar extends Component {

  logout() {
    Api.post(`/auth/logout`)
      .then(() => {
        this.props.setCurrentUser(null);
      });
  }


  render() {
    const currentRoute = window.location.href;
    return (
      <nav className="navbar" id="top">
        <div className="navbar-item">
          <a href="/"><img src="http://imgur.com/cyM42ng.png" alt="local - travel like you live there" width="75" height="28"></img></a>
        </div>
        <div className="navbar-brand">
          {currentRoute.includes('map') ?
            <div className="navbar-item">
              <div className="navbar-item">
                <div className="itinerary">
                  <Link to="/map"><i className="fa fa-globe"></i>&nbsp;&nbsp;export map</Link></div>
              </div>
              <div className="navbar-item">
                <div className="itinerary">
                <Link maintainScrollPosition={false} to="/itinerary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</Link></div>
              </div>
            </div>
            :
            currentRoute.includes('itinerary') ?
              <div className="navbar-item">
                <div className="navbar-item">
                  <div className="itinerary">
                    <Link to="/"><i className="fa fa-clone"></i>&nbsp;&nbsp;all cards</Link></div>
                  </div>
                  <div className="navbar-item">
                    <div className="itinerary">
                      <Link to="/map"><i className="fa fa-map"></i>&nbsp;&nbsp;map</Link></div>
                    </div>
                </div>
              :
                <div className="navbar-item">
                  <div className="navbar-item">
                  <div className="itinerary">
                    <AddCard /></div>
                </div>
                  <div className="navbar-item">
                    <div className="itinerary">
                      <Link to="/itinerary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</Link></div>
                  </div>
                </div>
          }
          <p className="navbar-item">|</p>
          {this.props.currentUser ?
            <div className="navbar-item">
              <div className="itinerary">
                <a onClick={this.logout.bind(this)}><i className="fa fa-paper-plane-o"></i>&nbsp;&nbsp;logout</a></div>
            </div>
            :
            <div className="navbar-item">
              <div className="itinerary">
                <Link to="/auth"><i className="fa fa-paper-plane"></i>&nbsp;&nbsp;login</Link></div>
            </div>
          }
        </div>
      <div className="navbar-end"></div>
      </nav>
    );
  }
}

export default Navbar;