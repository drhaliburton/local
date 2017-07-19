import React, {Component} from 'react';

class Rating extends Component {

  render() {
    return (
        <div className="rating">
          <span className="icon is-small" aria-hidden="true">
            <i className="fa fa-arrow-circle-up is-medium"></i>&nbsp;<i className="fa fa-arrow-circle-down is-medium"></i>
          </span>
          <p className="subtitle"><i>{`Recommended by ${this.props.rating || '0'} travellers.`}</i></p>
        </div>
    );
  }
}

export default Rating;