import React, {Component} from 'react';

class SignIn extends Component {
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
        <h1>Sign In</h1>
      </div>
    );
  }
}

export default SignIn;
