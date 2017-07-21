import React, { Component } from 'react';
//Importing filters and searchbar components

class Navbar extends Component {

  logout() {
    Api.post(`/auth/logout`)
      .then(() => {});
  }

  render() {
    const currentRoute = window.location.href;
    return (
      <nav className="navbar">
        <div className="navbar-item">
          <a href="/"><img src="http://imgur.com/cyM42ng.png" alt="local - travel like you live there" width="75" height="28"></img></a>
        </div>

        <div className="navbar-end"></div>
        <div className="navbar-brand">
          {currentRoute.includes('map') ?
            <div className="navbar-item">
              <div className="navbar-item">
                <p className="itinerary">
                  <a href="#"><i className="fa fa-globe"></i>&nbsp;&nbsp;export map</a></p>
              </div>
              <div className="navbar-item">
                <p className="itinerary">
                  <a href="/#/itinerary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</a></p>
              </div>
            </div>
            :
            currentRoute.includes('itinerary') ?
              <div className="navbar-item">
                <div className="navbar-item">
                  <p className="itinerary">
                    <a href="/#/add"><i className="fa fa-plus-square-o"></i>&nbsp;&nbsp;add card</a></p>
                </div>
                <div className="navbar-item">
                  <p className="itinerary">
                    <a href="#"><i className="fa fa-calendar-check-o"></i>&nbsp;&nbsp;save to calendar</a></p>
                </div>
                <div className="navbar-item">
                  <p className="itinerary">
                    <a href="/#/map"><i className="fa fa-map"></i>&nbsp;&nbsp;map</a></p>
                </div>
              </div>
              :
              currentRoute.includes('add') ?
                <div className="navbar-item">
                  <div className="navbar-item">
                    <p className="itinerary">
                      <a href="/#/itinerary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</a></p>
                  </div>
                </div>
                :
                <div className="navbar-item">
                  <div className="navbar-item">
                    <p className="itinerary">
                      <a href="/#/itinerary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</a></p>
                  </div>
                </div>
          }
          {false ?
            <div className="navbar-item">
              <p className="itinerary">
                <a href="/#/auth"><i className="fa fa-paper-plane"></i>&nbsp;&nbsp;login</a></p>
            </div>
            :
            <div className="navbar-item">
              <p className="itinerary">
                <a onClick={this.logout.bind(this)}><i className="fa fa-paper-plane-o"></i>&nbsp;&nbsp;logout</a></p>
            </div>
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;