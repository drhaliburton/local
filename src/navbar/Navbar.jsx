import React, {Component} from 'react';
//Importing filters and searchbar components
import Filter from './Filter.jsx';
import Search from './Search.jsx';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-item">
            <a href="/"><img src="http://imgur.com/cyM42ng.png" alt="local - travel like you live there" width="75" height="28"></a>
          </a>

          <div className="navbar-burger burger" data-target="navMenuExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-end">
          <div id="navMenuExample" className="navbar-menu">
          <div className="navbar-item">
              <p className="control">
                <p className="field">
                <a className="button is-medium">
                  <span className="icon is-large">
                    <i className="fa fa-pencil-square"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
