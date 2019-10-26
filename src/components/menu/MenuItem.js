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
          clientId="1029989204063-83br7bejtl1a6kjom4l7ap1er2nq6raj.apps.googleusercontent.com"
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
