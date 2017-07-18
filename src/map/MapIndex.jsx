import React, {Component} from 'react';

class MapIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  render() {
      console.log("Rendering <App />");
    return (
      <div>    
        <h1>Map Page</h1>
      </div>
    );
  }
}

export default MapIndex;
