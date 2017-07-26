import React, { Component } from 'react';
import moment from 'moment';

class ExportCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      "summary": '',
      "description": '',
      "location": '',
      "start": {
        "dateTime": "2017-09-08T22:47:31-07:00"
      },
      "end": {
        "dateTime": "2017-09-08T23:47:31-07:00"
      }
    }
  }


  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }
  // handleInput(time) {
  //   console.log(time)
  // }
  // toggleActive() {
  //   this.setState({
  //     isActive: !this.state.isActive
  //   });
  // }
  // submitDate(event) {
  //   this.props.setDate(this.state.startDate)
  //   this.toggleActive()
  // }
  // toggleHidden(event){
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   });
  // }
  calculateTimes() {
    const { events, date } = this.props;
    
    let startTime = moment(date);

    const timedEvents = events.map(event => {
      const eventStart = moment(startTime);
      const eventEnd = moment(startTime).add(event.duration, 'm');

      startTime = eventEnd; 

      return {
        description: event.description,
        start: {
          dateTime: eventStart
        },
        end: {
          dateTime: eventEnd
        }
      };
    });

    return timedEvents;
  }

  handleClick(event) {
    //
    //for each event do a fetch to google api with the proper credentials attached
    console.log('the array after mapping', this.calculateTimes());
    let newBody = this.state
    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.token
      },
      body: JSON.stringify(newBody)
    })
  }
  componentWillReceiveProps(nextProps) {
//Receiving content of itinerary cards, the startdate, and starttime of the itinerary
    let incomingEvents = nextProps.events
    let dateArray = nextProps.date
//TODO calculate the start time for each card based on the relationship between the final position of the card and the
    let momentStartTime = nextProps.momentStartTime
    console.log('yo', nextProps)
    //map into new array 
    
    const mappedEvents = incomingEvents.map((event) => {
      return [
        {
      "summary": event.title,
      "description": event.description,
      "start": {
        "dateTime": "2017-09-10T18:47:31-07:00"
      },
      "end": {
        "dateTime": "2017-09-10T22:47:31-07:00"
      }
    }]
  });
  console.log('update state', mappedEvents)
  }
  render() {
    // const activeToggle = this.state.isActive ? 'is-active' : ''
    // const day = this.state.startDate
    return (
      <div className="export">
        <div className='button' onClick={this.handleClick.bind(this)}><h6 className="title is-6">export calendar</h6></div>
      </div>
    );
  }
}

export default ExportCalendar;

