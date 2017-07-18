import React, {Component} from 'react';
//TODO Add Event Listener to Search bar to extract input and use it to query database
class Search extends Component {
  render() {
    return (
      <div className="landing-content">
        <div className="columns has-text-centered">
          <div className="column is-5">
            <p className="control landing"></p>
              <input className="input" type="text" placeholder="Where are you going?"></input>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
