import React, { Component } from 'react';
import DatePicker from '../../node_modules/react-datepicker';
import moment from 'moment';

class Today extends Component {

  render() {
    return (
      <div>
        <section className="modal-card-footer">
          <h6 className="title is-6">{this.props.day.format('llll')}</h6>
        </section>
      </div>
    );
  }
}

export default Today;
