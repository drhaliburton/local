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
  }
  toggleActive() {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  submitDate(event) {
    this.props.setDate(this.state.startDate)
    this.toggleActive()
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
      <div className="column has-text-centered">
        <div className='button' onClick={this.toggleActive.bind(this)} ><h6 className="title is-6">date</h6></div>
        <div className={`modal + ${activeToggle} + has-text-centered`}>
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
              />
            </section>
            <section className="modal-card-foot">
              <div className="column">
                <div className="control has-text-centered">
                  <button type="submit" value="submit" className="button" onClick={this.submitDate.bind(this)}>Submit</button>
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
