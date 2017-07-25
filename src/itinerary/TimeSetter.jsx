import '../../node_modules/rc-time-picker/assets/index.css';
import React, { Component } from 'react';

import moment from 'moment';

import TimePicker from 'rc-time-picker';

document.getElementById('__react-content')

class TimeSetter extends Component {
constructor(props) {
    super(props)
    this.state = {
      value : this.props.value
    };
  }

  toggleActive(event) {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  onChange(value){
    console.log('do you have any value?', value)
  }
  componentWillReceiveProps(nextProps) {
    console.log('props', nextProps)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('are you there?', prevProps, prevState.value)
  } 
  render() {
    const format = 'h:mm a';

    const now = moment().hour(0).minute(0);

    function onChange(value) {
      this.setState({value: value})
      return;
    }

    const activeToggle = this.state.isActive ? 'is-active' : '';
    return (
      <div className="column has-text-centered">
        
        <div className='button' onClick={this.toggleActive.bind(this)}><h6 className="title is-6">time</h6></div>
        <div className={`modal + ${activeToggle} + has-text-centered`}>
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