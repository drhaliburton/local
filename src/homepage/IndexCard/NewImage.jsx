
import React, {Component} from 'react';

class NewImage extends Component {


  renderImage(images) {
    if (images === null) {
      return 'https://unsplash.it/200/300/?random';
    } else {
      let randomInt = Math.ceil(Math.random() * images.length) -1;
      return this.props.image[randomInt];
    }
  }

  render() {
    return (
      <div className="card-image">
        <figure className="cover">
          <img src={this.renderImage(this.props.image)} alt="Image"></img>
        </figure>
      </div>
    );
  }
}

export default NewImage;