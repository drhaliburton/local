import React, {Component} from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import ItineraryCard from "./ItineraryCard.jsx";

//Contains
class Itinerary extends Component {
  render() {
    return (
      <div class="columns">
        < ItineraryTime />
        <div class="column is-10">
          < ItineraryCard />
        </div>
      </div>
    );
  }
}

export default Itinerary;