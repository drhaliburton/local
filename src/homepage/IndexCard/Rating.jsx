import React, {Component} from 'react';

class Rating extends Component {

  render() {
    return (
        <div className="rating">
          <span className="icon is-small" aria-hidden="true">
            <i className="fa fa-arrow-circle-up"></i>&nbsp;<i className="fa fa-arrow-circle-down"></i>
          </span>
        </div>
    );
  }
}

export default Rating;