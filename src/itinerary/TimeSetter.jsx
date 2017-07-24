import '../../node_modules/rc-time-picker/assets/index.css';
import React, { Component } from 'react';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

class TimeSetter extends Component {

  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    const format = 'h:mm a';

    const now = moment().hour(0).minute(0);

    function onChange(value) {
      console.log(value && value.format(format));
    }
    // const activeToggle = this.state.isActive ? 'is-active' : ''
    document.getElementById('__react-content')
    return (
      <div className="column has-text-centered">
        <div className='button'><h6 className="title is-6">start</h6></div>
        <div className='modal '>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">What time does your day start?</p>
            </header>
            <section className="modal-card-body">
              <TimePicker
                showSecond={false}
                defaultValue={now}
                className="xxx"
                onChange={onChange}
                format={format}
                use12Hours
              />
            </section>
            <section className="modal-card-foot">
              <div className="column">
                <div className="control has-text-centered">
                  <button type="submit" value="submit" className="button" onClick={this.toggleActive.bind(this)}>Submit</button>
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

export default TimeSetter;