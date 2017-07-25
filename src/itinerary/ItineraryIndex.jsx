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
      time: [],
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
    this.setState({time : [9] })
  }
    

  add(card) {
    let newCard = this.state.itineraryCards.concat(card.card);
    let removeCard = this.state.favCards.splice(0)
    let index = (this.state.time.length - 1)
    let oldTime = (this.state.time[index])
    console.log('old times', oldTime)
    let timePassed = (card.card.duration / 60)
    let newTime = Math.floor((oldTime + timePassed))
    let latest =  this.state.time.concat(newTime);
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
  }

  saveItinerary(){
    event.preventDefault();
    const itineraryCards = this.state.itineraryCards;
    const date = this.state.date.format('YYYY-MM-DD');
    const cardIds = itineraryCards.map((card) => {
      return card.id;
    })

    console.log('cardIds: ', cardIds);

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

  render() {
    const node = document.getElementById('top');
    node.scrollIntoView({ behavior: "smooth" });
    return (
      <div className="itinerary-container">
        <div className="header">
          <FavoriteBar favCards={this.state.favCards} add={this.add.bind(this)} />
        </div>
        <p className="calendar"><i className="fa fa-calendar-check-o"></i>&nbsp;save to calendar</p>
        <div className="welcome">
          <button onClick={() => {this.saveItinerary()}}>Save</button>
          <Set setDate={this.setDate.bind(this)} />
          <h3 className="title is-3">{this.state.date.format('LL')}</h3>
        </div>
        <div className="columns">
          <div className="column is-1">
            <ItineraryTime />
          </div>
          <div className="column is-1">
            <TimeSet time={this.state.time} cards={this.state.itineraryCards}/>
          </div>
          <div className="column is-10">
            <SortableComponent cards={this.state.itineraryCards} />
          </div>
        </div>
      </div>
    );
  }
}

export default ItineraryIndex;