import React, { Component } from 'react';
import moment from 'moment';

class ExportCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {

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


  postToCalendar(timedEvents) {
    let token = this.props.token
    console.log('tokenistic', token)
    for (var events in timedEvents) {
      // post to fetch

      fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(timedEvents[events])
      })
    }
  }

  calculateTimes() {
    const { events, date } = this.props;

    let startTime = moment(date);

    const timedEvents = events.map(event => {
      const eventStart = moment(startTime);
      const eventEnd = moment(startTime).add(event.duration, 'm')
      const ended = eventEnd.toISOString()
      const started = eventStart.toISOString()
      console.log('where did it end?', ended)

      startTime = eventEnd;

      return {
        description: event.description,
        summary: event.title,
        start: {
          dateTime: started
        },
        end: {
          dateTime: ended
        }
      };
    });
    this.postToCalendar(timedEvents);
    return timedEvents;
  }

  handleClick(event) {
    //
    //for each event do a fetch to google api with the proper credentials attached

    console.log('helloooo', this.calculateTimes())
    this.postToCalendar();
    // let newBody = this.state
    // fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.props.token
    //   },
    //   body: JSON.stringify(newBody)
    // })
  }
  componentWillReceiveProps(nextProps) {
    //Receiving content of itinerary cards, the startdate, and starttime of the itinerary
    let incomingEvents = nextProps.events
    let dateArray = nextProps.date
    //TODO calculate the start time for each card based on the relationship between the final position of the card and the
    let momentStartTime = nextProps.momentStartTime
    //map into new array

    //   const mappedEvents = incomingEvents.map((event) => {
    //     return [
    //       {
    //         "summary": event.title,
    //         "description": event.description,
    //         "start": {
    //           "dateTime": "2017-09-10T18:47:31-07:00"
    //         },
    //         "end": {
    //           "dateTime": "2017-09-10T22:47:31-07:00"
    //         }
    //       }]
    //   });
    //   console.log('update state', mappedEvents)
  }
  render() {
    // const activeToggle = this.state.isActive ? 'is-active' : ''
    // const day = this.state.startDate
    return (
      <div className="export-calendar">
        <a className="button export" onClick={this.handleClick.bind(this)}>
        <p className="icon is-medium">
          <i className="fa fa-calendar-plus-o"></i>&nbsp;&nbsp;export
        </p>
          </a>
      </div>
    );
  }
}

export default ExportCalendar;