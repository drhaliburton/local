import React, {Component} from 'react';

class Rating extends Component {

  render() {
    return (
        <div className="rating">
          <span className="icon is-small" aria-hidden="true">
            <i className="fa fa-arrow-circle-up is-medium" onClick={() => {
              this.props.addOne({id: this.props.cardID})
            }}></i>&nbsp;<i className="fa fa-arrow-circle-down is-medium" onClick={() => {
              this.props.removeOne({id: this.props.cardID})
            }} ></i>
          </span>
          <p className="subtitle"> Recommended by {this.props.rating || '0'} travellers.</p>
        </div>
    );
  }
}

export default Rating;