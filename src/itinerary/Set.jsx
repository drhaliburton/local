import React, { Component } from 'react';
import DatePicker from '../../node_modules/react-datepicker';
import moment from 'moment';
import TimeSet from './TimeSet.jsx'

class Set extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      startTime: 9,
      timeOfDay: 'AM',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  handleInput(time) {
    console.log(time)
  }
  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  submitDate(event) {
    this.props.setDate(this.state.startDate)
    this.props.setTime(this.state)
    this.toggleActive()
    this.submitTime()
  }
  submitTime() {
    // this.setState({
    //   startTime: event.target.value
    // })
  }
  submitAM(event) {
    this.setState({
      timeOfDay: event.target.value
    })
  }
  timeChange(event) {
    this.setState({
      startTime: event.target.value
    })
  }
  // toggleHidden(event){
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   });
  // }

  render() {
    const activeToggle = this.state.isActive ? 'is-active' : ''
    const day = this.state.startDate
    return (
      <div className="set-date">
        <div className='button calendar' onClick={this.toggleActive.bind(this)}>
          <p className="icon is-medium calendar">
            <i className="fa fa-clock-o"></i>&nbsp;&nbsp;time and day
          </p>
          {/* <h6 className="title is-6">&nbsp;&nbsp;set date</h6> */}
        </div>
        <div className="calendar-set-time">
          <div className={`modal ${activeToggle} has-text-centered`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <h4 className="title time-ask is-4">What day are you planning?</h4>
              <section className="modal-card-body">
                <DatePicker
                  inline
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                />
                  <h6 className="subtitle time-ask is-6">What time do you want to start?</h6>
                <TimeSet submitTime={this.submitTime.bind(this)} submitAM={this.submitAM.bind(this)} handleChange={this.timeChange.bind(this)} />
                <a type="submit" value="submit" className="button submit-date" onClick={this.submitDate.bind(this)}>submit</a>
              </section>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Set;