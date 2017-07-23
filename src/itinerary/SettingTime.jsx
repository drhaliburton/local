import React, { Component } from 'react';

class SettingTime extends Component {

  render() {
    return (
      <div className="modal is-active has-text-centered">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">What day do you want to plan?</p>
          </header>
          <section className="modal-card-body">
          </section>
          <footer className="modal-card-foot">
            <a className="button">Start</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default SettingTime;