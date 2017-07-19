// import React, {Component} from 'react';
// import GoogleLogin from 'react-google-login';

// class SignIn extends Component {

//   responseGoogle (response) {
//     document.getElementById('googleButton')
//     console.log(JSON.stringify(response.tokenId))
//     fetch('/auth', {
//       method: 'POST',
//       headers: JSON.stringify({
//         Authorization: response.tokenId
//       })

//     })
//   }

//   failureGoogle (response){
//     alert('Go home. Google doesnt like you')
//   }

//   componentDidMount() {

//   }

//   render() {
//     return (
//         <GoogleLogin
//         clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//         buttonText="Login"
//         onSuccess={this.responseGoogle}
//         onFailure={this.failureGoogle}/>
//     );
//   }
// }

// export default SignIn;


