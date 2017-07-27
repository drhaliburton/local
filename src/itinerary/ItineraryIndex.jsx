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
      date: moment().hour(9).minute(0).seconds(0),
      momentStartTime: null,
    }
  }

  componentWillMount() {
    Api.get('/itinerary/favorites')
      .then((cards) => this.setState({
        favCards: cards
      }));

    let defaultStartTime = moment().hour(9);
    this.setState(({ time: [9], momentStartTime: defaultStartTime }))

    Api.get('/itinerary/cards')
      .then((cards) => this.setState({
        itineraryCards: cards
      })
    );
    // this.setState({time : [9] })
  }

  add(card) {
    //Adding itinerary card from favorite bar
    let newCard = this.state.itineraryCards.concat(card.card);
    let removeCard = this.state.favCards.splice(0)
    let index = (this.state.time.length - 1)
    let oldTime = (this.state.time[index])
    let timePassed = (card.card.duration / 60)
    let newTime = Math.floor((oldTime + timePassed))
    let latest = this.state.time.concat(newTime);
    this.setState({ itineraryCards: newCard, favCards: removeCard, time: latest });
  }

  removeItineraryCard(card) {
    let target = this.state.itineraryCards.indexOf(card.card);

    this.setState({
      itineraryCards: this.state.itineraryCards.slice(0, target).concat(this.state.itineraryCards.slice(target + 1))
    });
  }

  componentDidMount() {
    var date = new Date();
  }
  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  setTime(time) {
    let unformattedStartTime = (time.startTime + ' ' + time.timeOfDay)
    var formattedStartTime = moment(unformattedStartTime, 'HH:mm A');
    console.log('hey format', formattedStartTime)
    moment(this.state.date).hour(this.state.startTime)
    console.log()

    this.setState({
      startTime: time.startTime,
      timeOfDay: time.timeOfDay,
      momentStartTime: formattedStartTime,
    })
  }
  setDate(date) {
    this.setState({
      date: date,
    })
  }

  saveItinerary() {
    event.preventDefault();
    const itineraryCards = this.state.itineraryCards;
    const date = this.state.date.format('YYYY-MM-DD');
    const cardIds = itineraryCards.map((card) => {
      return card.id;
    })
    fetch('/itinerary/cards', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: date,
        cardIds: cardIds
      })
    })
  };

  removeFavorite(id) {

    fetch('/itinerary/favorite', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cardId: id
      })
    })
    this.reRenderFavorites();
  }

  reRenderFavorites() {
    Api.get('/itinerary/favorites')
      .then((cards) => this.setState({
        favCards: cards
      })
      );
  }

  reorderCards(cards) {
    this.setState({
      itineraryCards: cards
    })
  }

  render() {
    const node = document.getElementById('top');
    node.scrollIntoView({ behavior: "smooth" });
    return (

      <div className="itinerary-container">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards} add={this.add.bind(this)} removeFavorite={this.removeFavorite.bind(this)} />
        </div>
        <div className="welcome">
          <ExportCalendar token={this.props.currentUser.token} events={this.state.itineraryCards} date={this.state.date} />
          <Set setDate={this.setDate.bind(this)} setTime={this.setTime.bind(this)} cards={this.state.itineraryCards} />
          <button onClick={() => { this.saveItinerary() }}>Save</button>
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
            <SortableComponent cards={this.state.itineraryCards} remove={this.removeItineraryCard.bind(this)} reorderCards={this.reorderCards.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;