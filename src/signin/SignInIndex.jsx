import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

class SignIn extends Component {

  responseGoogle (response) {

    document.getElementById('googleButton')
    console.log(response.profileObj.givenName)
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        given_name: response.profileObj.givenName,
        family_name: response.profileObj.familyName,
        token: response.googleId
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


