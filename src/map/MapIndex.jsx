import React, {Component} from 'react';

class MapIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  render() {
      console.log("Rendering Map");
    return (
      <div>
        <h1>Map Page</h1>
        <iframe width={'600'} height={'450'} frameBorder={'0'} src={'https://www.google.com/maps/embed/v1/search?q=vancouver&key=AIzaSyCYGEUbiGFs5-eKgiH4jDuv9hD1HgOmlYs'} allowFullScreen></iframe>
      </div>
    );
  }
}

export default MapIndex;
