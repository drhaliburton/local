import React, { Component } from 'react';
import moment from 'moment';

class ExportCalendar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  postToCalendar(timedEvents) {
    let token = this.props.token
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
    this.postToCalendar();
  }
  componentWillReceiveProps(nextProps) {
    //Receiving content of itinerary cards, the startdate, and starttime of the itinerary
    let incomingEvents = nextProps.events
    let dateArray = nextProps.date
    //TODO calculate the start time for each card based on the relationship between the final position of the card and the
    let momentStartTime = nextProps.momentStartTime
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