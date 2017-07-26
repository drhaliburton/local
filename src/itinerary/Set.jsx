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
        <div className='button' onClick={this.toggleActive.bind(this)}><span className="fa fa-calendar-o"></span><h6 className="title is-6">&nbsp;&nbsp;set date</h6></div>
        <div className={`modal + ${activeToggle} + has-text-centered`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <h6 className="modal-card-title">What day do you want to plan?</h6>
            </header>
            <section className="modal-card-body">
              <DatePicker
                inline
                selected={this.state.startDate}
                onChange={this.handleChange}
              />
            </section>
            <section className="modal-card-foot">
              <h6 className="subtitle is-6">What time do you want to start?</h6>
              <div className="columns">
                <div className="column time-set is-6 has-text-centered">
                  <TimeSet submitTime={this.submitTime.bind(this)} submitAM={this.submitAM.bind(this)} handleChange={this.timeChange.bind(this)} />
                </div>
                <div className="column submit is-6">
                  <div className="control has-text-centered">
                    <button type="submit" value="submit" className="button" onClick={this.submitDate.bind(this)}>Submit</button>
                  </div>
                </div>
                </div>
            </section>
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Set;
