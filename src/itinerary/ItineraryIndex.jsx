import React, { Component } from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "./dnd/SortableComponent.jsx";
import SettingTime from "./SettingTime.jsx";
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

    Api.get('/itinerary/')
      .then((cards) => this.setState({
        itineraryCards: cards
      })
    );
  }
  add(card) {
    let newCard = this.state.itineraryCards.concat(card.card);
    let removeCard = this.state.favCards.splice(0)
    this.setState({ itineraryCards: newCard, favCards: removeCard });
  }
  // delete(card) {
  //   let removeCard = this.state.itineraryCards.splice(card.card);
  //   let newCard = this.state.favCards.concat(card.card);
  //   this.setState({ itineraryCards: removeCard });
  //   this.setState({ favCards: newCard })
  // }

  componentDidMount() {

    //   fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    //     method: 'POST',
    //     credentials: 'include',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': 'Bearer '//this.props.routes.currentUser.token,
    //     },
    //     body: JSON.stringify({
    //       "start": {
    //         "dateTime": "2017-09-08T22:47:31-07:00"
    //       },
    //       "end": {
    //         "dateTime": "2017-09-08T23:47:31-07:00"
    //       }
    //     })
    //   })
  }

  render() {
    const node = document.getElementById('top');
    node.scrollIntoView({ behavior: "smooth" });
    return (
      <div className="itinerary">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards} add={this.add.bind(this)} />
        </div>
        <p className="calendar"><i className="fa fa-calendar-check-o"></i>&nbsp;save to calendar</p>
        <div className="columns">
          < SettingTime /> 
          <div className="column is-2">
            <ItineraryTime />
          </div>
          <div className="column is-9">
            <SortableComponent cards={this.state.itineraryCards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;