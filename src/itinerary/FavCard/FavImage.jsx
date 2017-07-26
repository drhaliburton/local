import React, { Component } from 'react';

class FavImage extends Component {

  renderImage(images) {
    if (images == null) {
      return 'https://unsplash.it/200/300/?random';
    } else {
      return this.props.images[0];
    }
  }
  render() {
    return (
      <div className="card-image">
        <figure className="image">
                  <a className="delete" onClick={(event) => {this.props.removeFavorite(this.props.id)}}></a>
          <img src={this.renderImage(this.props.images)} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default FavImage;

