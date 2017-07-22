import React, {Component} from 'react';

class NewImage extends Component {


  renderImage(images) {
    if (images == null) {
      return 'http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg';
    } else {
      return this.props.image;
    }
  }

  render() {
    return (
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={this.renderImage(this.props.image)} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default NewImage;

