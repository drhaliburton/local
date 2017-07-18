import React, {Component} from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import ItineraryCard from "./ItineraryCard.jsx";

//Contains
class ItineraryIndex extends Component {
  render() {
    return (
      <div className="columns">
        < ItineraryTime />
        <div className="column is-10">
          < ItineraryCard />
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;