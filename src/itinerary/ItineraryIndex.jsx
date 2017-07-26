import React, { Component } from 'react';
import ItineraryTime from "./ItineraryTime.jsx";
import FavoriteBar from "./FavoriteBar.jsx";
import SortableComponent from "./dnd/SortableComponent.jsx";
import Set from "./Set.jsx";
import TimeSetter from "./TimeSetter.jsx";
import ExportCalendar from "./ExportCalendar.jsx";
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
      startTime: 9,
      timeOfDay: 'AM',
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
    this.setState({ time: [9] })
  }


  add(card) {
    let newCard = this.state.itineraryCards.concat(card.card);
    let removeCard = this.state.favCards.splice(0)
    let index = (this.state.time.length - 1)
    let oldTime = (this.state.time[index])
    console.log('old times', oldTime)
    let timePassed = (card.card.duration / 60)
    let newTime = Math.floor((oldTime + timePassed))
    let latest = this.state.time.concat(newTime);
    this.setState({ itineraryCards: newCard, favCards: removeCard, time: latest });
    console.log('what time is it?', this.state.time[0])
    console.log('new state', this.state.time)
  }
  // delete(card) {
  //   let removeCard = this.state.itineraryCards.splice(card.card);
  //   let newCard = this.state.favCards.concat(card.card);
  //   this.setState({ itineraryCards: removeCard });
  //   this.setState({ favCards: newCard })
  // }

  componentDidMount() {
    var date = new Date();
  }
  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  setTime(time) {
    this.setState({
      startTime: time.startTime,
      timeOfDay: time.timeOfDay,
    })
  }
  setDate(date) {
    this.setState({
      date: date,
    })
  }


  render() {
    const node = document.getElementById('top');
    node.scrollIntoView({ behavior: "smooth" });
    return (
      <div className="itinerary-container">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards} add={this.add.bind(this)} />
        </div>
        <div className="welcome">
          <ExportCalendar token={this.props.currentUser.token} events={this.state.itineraryCards} date={this.state.date} />
          <Set setDate={this.setDate.bind(this)} setTime={this.setTime.bind(this)} cards={this.state.itineraryCards} />
          <h3 className="title is-3">{this.state.date.format('LL')}</h3>
        </div>
        <div className="columns">
          <div className="time-image column is-1">
            <ItineraryTime />
          </div>
          <div className="start-time column is-2 has-text-centered">
            <h5 className="start-time title is-5">{this.state.startTime} {this.state.timeOfDay}</h5>
          </div>
          <div className="it-card column is-9">
            <SortableComponent cards={this.state.itineraryCards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;