import React, {Component} from 'react';
//Importing filters and searchbar components

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-item">
          <a href="/"><img src="http://imgur.com/cyM42ng.png" alt="local - travel like you live there" width="75" height="28"></img></a>
        </div>
        <div className="navbar-end">
        </div>
        <div className="navbar-brand">
            <div className="navbar-item">
              <p><span className="itinierary"><i className="fa fa-map-o"></i>&nbsp;&nbsp;itinerary</span></p>
            </div>   
          </div>
      </nav>
    );
  }
}
export default Navbar;
