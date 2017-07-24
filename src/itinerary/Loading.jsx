import React, { Component } from 'react';
import DatePicker from '../../node_modules/react-datepicker';
import moment from 'moment';
import Set from './Set.jsx'

class Loading extends Component {

  render() {
    return (
      <div>
        <section className="modal-card-footer">
          <h6 className="title is-6">Hello!</h6>
        </section>
      </div>
    );
  }
}

export default Loading;
