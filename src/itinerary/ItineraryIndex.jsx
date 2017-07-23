import React, {Component} from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "./dnd/SortableComponent.jsx";
import Api from '../../library/api.js';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favCards: [],
      itineraryCards: []
    }
  }

  componentWillMount() {
    Api.get('/itinerary/favorites')
      .then((cards) => this.setState({
        favCards: cards
      })
    );

    Api.get('/itinerary')
      .then((cards) => this.setState({
        itineraryCards: cards
      })
    );
  }
componentDidMount() {
    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      credentials: 'include',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '//this.props.routes.currentUser.token,
      },
      body: JSON.stringify({
        "start": {
          "dateTime": "2017-09-08T22:47:31-07:00"
        },
        "end": {
          "dateTime": "2017-09-08T23:47:31-07:00"
        }
      })
    })
  }

  render() {
    return (
      <div className="itinerary">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards}/>
        </div>
        <p className="calendar"><i className="fa fa-calendar-check-o"></i>&nbsp;save to calendar</p>
        <div className="columns">

          <div className="column is-2">
            <ItineraryTime />
          </div>
          <div className="column is-9">
            <SortableComponent cards={this.state.favCards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;