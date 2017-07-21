import React, {Component} from 'react';
//TODO Add Event Listener to Search bar to extract input and use it to query database
class Saved extends Component {
  render() {
    return (
      <div className="landing-content">
        <div className="columns has-text-centered">
          <div className="column is-6">
            <div className="accent-font">Saved to Calendar!</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Saved;
