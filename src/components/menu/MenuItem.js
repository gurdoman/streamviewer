import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';

export default class MenuItem extends Component {
  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }
    
    return (
      <li className="header-nav_item">
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={renderProps => (
            <span onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</span>
          )}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </li>
    )
  }
}
