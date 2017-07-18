import React, {Component} from 'react';

class Rating extends Component {

  render() {
    return (
      <div className="rating">
        <span className="icon" aria-hidden="true"><i className="fa fa-arrow-up"></i><i className="fa fa-arrow-up is-rotated"></i></span> 
      </div>
    );
  }
}

export default Rating;