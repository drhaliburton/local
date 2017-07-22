import React, { Component } from 'react';

class FavImage extends Component {

  render() {
    return (
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={this.props.image} alt="Image"></img>
          <i class="fa fa-tree"></i>
        </figure>
      </div>
    );
  }
}

export default FavImage;

