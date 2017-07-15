import React, {Component} from 'react';
import IndexCard from "./card/IndexCard.jsx";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {},
      messages: [],
      userCount: []
    }
  }

  render() {
      console.log("Rendering <App />");
    return (
      <div>
        <IndexCard />
      </div>
    );
  }
}

export default App;
