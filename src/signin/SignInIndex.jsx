import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

class SignInIndex extends Component {
  constructor(props) {
    super(props);
  }

  responseGoogle(response) {
    const user = {
      givenName: response.profileObj.givenName,
      familyName: response.profileObj.familyName,
      googleId: response.googleId,
      email: response.profileObj.email,
      token: response.accessToken,
    }
    fetch('/auth', {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }).then((result) => {
      window.location.href = '/';
    })
  }

  failureGoogle(response) {
    alert('Login failed. Please register with Google and try again.')
  }

  // componentDidUpdate(){
  //   this.props.route.getCurrentUser()
  // }


  render() {
    document.getElementById('googleButton')
    return (
      <div className="modal is-active has-text-centered" onClick={this.props.getCurrentUser}>
        <div className="modal-background"></div>
        <div className="modal-content">
        <h3 className="title is-3">Please sign in with Google</h3>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            className='button'
            scope={'https://www.googleapis.com/auth/calendar'}
            onSuccess={this.responseGoogle.bind(this)}
            onFailure={this.failureGoogle.bind(this)} />
          </div>
      </div>
    );
  }
}

export default SignInIndex;


