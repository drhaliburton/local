import React, {Component} from 'react';

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
        <h1>It works!</h1>
      </div>
    );
  }
}

export default App;
