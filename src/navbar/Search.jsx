import React, {Component} from 'react';
//TODO Add Event Listener to Search bar to extract input and use it to query database
class Search extends Component {
  render() {
    return (
    <div className="landing-content <is-vcentered></is-vcentered>">
      <div className="columns has-text-centered">
        <div className="column is-6 is-offset-3">
          <div className="field landing">
            <label className="brand"><img src="http://imgur.com/xlK3CTN.png" alt="travel like you live there"</label>
            <p className="control landing">
              <input className="input" type="text" placeholder="Where do you want to go?">
            </p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Search;
