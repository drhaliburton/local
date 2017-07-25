import React, { Component } from 'react';

class FavImage extends Component {
  
  renderImage(images) {
    if (images == null) {
      return 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg';
    } else {
      return this.props.images[0];
    }
  }
  render() {
    return (
      <div className="card-image">
        <figure className="image">
          <img src={this.renderImage(this.props.images)} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default FavImage;

