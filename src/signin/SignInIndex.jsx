<<<<<<< HEAD
import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class SignIn extends Component {

  responseGoogle (response) {
    document.getElementById('googleButton')
    console.log(JSON.stringify(response.tokenId))
    fetch('/auth', {
      method: 'POST',
      headers: JSON.stringify({
        Authorization: response.tokenId
      })

    })
  }

  failureGoogle (response){
    alert('Go home. Google doesnt like you')
  }

  componentDidMount() {

  }

  render() {
    return (
        <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.failureGoogle}/>
    );
  }
}

export default SignIn;
=======
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
>>>>>>> 1e3694caca23162bdc0f48db6f6f9bbd98c12d1d
