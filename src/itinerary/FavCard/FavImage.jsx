import React, { Component } from 'react';

class FavImage extends Component {

  render() {
    return (
      <div className="card-image">
        <figure className="image">
          <img src={this.props.image} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default FavImage;

