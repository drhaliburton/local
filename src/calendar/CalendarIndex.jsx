import React, {Component} from 'react';
import Saved from "./Saved.jsx";

class CalendarIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
componentDidMount() {
    fetch('/export', {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
}
  render() {
    return (
      <div className="itinerary">
        <div className="header">
          < Saved />
        </div>
      </div>
    );
  }
}

export default CalendarIndex;