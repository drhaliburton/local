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
  handleClick(event) {
    //loop through state and post each event  
    let newBody = this.state
    fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.token
      },
      body: JSON.stringify(<newBody></newBody>)
    })
  }
  componentWillReceiveProps(nextProps) {
    let eventArray = nextProps.events
    let dateArray = nextProps.date
    let props = nextProps

    //map into new array 
    
    eventArray.map((event) => {
    this.setState({
      "summary": event.title,
      "description": event.description,
      "start": {
        "dateTime": "2017-09-10T18:47:31-07:00"
      },
      "end": {
        "dateTime": "2017-09-10T22:47:31-07:00"
      }
    })
  });

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

