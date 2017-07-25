import React, { Component } from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "./dnd/SortableComponent.jsx";
import SettingTime from "./SettingTime.jsx";
import Set from "./Set.jsx";
import TimeSetter from "./TimeSetter.jsx";
import EventLine from "./EventLine.jsx";
import TimeSet from "./TimeSet.jsx";
import Api from '../../library/api.js';
import moment from 'moment';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favCards: [],
      itineraryCards: [],
      time: moment(),
      date: moment(),
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
    var date = new Date();


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
  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  setTime(time) {
    this.setState({
      time: time
    })
  }
  setDate(date) {
    this.setState({
      date: date
    })
    console.log('parent set date', date)
  }

  render() {
    const node = document.getElementById('top');
    node.scrollIntoView({ behavior: "smooth" });
    return (
      <div className="itinerary">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards} add={this.add.bind(this)} />
        </div>
        <div className="welcome">
          <h2 className="title is-2">{this.state.date.format('LL')}</h2>
        </div>
        <div className="columns">
          <div className="column is-2">
            <ItineraryTime />
          </div>
          <div className="column is-2">
            <TimeSet />
          </div>
          <div className="column is-8">
            <Set setDate={this.setDate.bind(this)} />
            <SortableComponent cards={this.state.itineraryCards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;