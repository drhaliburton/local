import React, { Component } from 'react';
import DatePicker from '../../node_modules/react-datepicker';
import moment from 'moment';

class Set extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate)
  }

  render() {
    return (
      <div className="modal is-active has-text-centered">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">What day do you want to plan?</p>
          </header>
          <section className="modal-card-body">
            <DatePicker
              inline
              selected={this.state.startDate}
              onChange={this.handleChange}
            />    </section>
          <footer className="modal-card-foot">
            <div className="column">
            <a className="button">Save</a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Set;
