
import React, {Component} from 'react';

class NewImage extends Component {


  renderImage(images) {
    if (images === null) {
      return 'https://source.unsplash.com/random/400';
    } else {
      let randomInt = Math.ceil(Math.random() * images.length) -1;
      return this.props.image[randomInt];
    }
  }

  render() {
    return (
      <div className="card-image">
        <img src={this.renderImage(this.props.image)} alt="Image"></img>
      </div>
    );
  }
}

export default NewImage;