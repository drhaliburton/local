import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

 // const successGoogle =
 const failureGoogle = (response) => {
  alert('Go home. Google doesnt like you')
 }

 const responseGoogle = (response) => {
  document.getElementById('googleButton')
  console.log(response);
  fetch('/auth', {
    method: 'POST',
    body: JSON.stringify({
      tokenID: response.tokenId
    })

  })
}


class SignIn extends Component {



  render() {
    return (
        <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={failureGoogle}/>
    );
  }
}

export default SignIn;
