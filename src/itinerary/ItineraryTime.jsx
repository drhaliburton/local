import React, {Component} from 'react';

//Contains
class ItineraryTime extends Component {
  render() {
    return (
        <div className="column is-2 has-text-centered">
          <span className="itinerary-time">
            <p className="fa fa-circle-o" aria-hidden="true"></p>
            <p className="fa fa-adjust" aria-hidden="true"></p>
            <p className="fa fa-circle" aria-hidden="true"></p>
          </span>
        </div>
    );
  }
}
export default ItineraryTime;