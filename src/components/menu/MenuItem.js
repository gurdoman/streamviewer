import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import UserInfo from './UserInfo';
import axios from 'axios';

export default class MenuItem extends Component {

  constructor(props){
    super(props);
    this.signup = this.signup.bind(this);
  }

  signup(response){
    let tokenId = response.tokenId;
    let data = {
      "tokenId" : tokenId,
      "source" : "google"
    }
    axios.post("http://localhost:3001/users", data)
    .then(response =>{
      this.props.handleAuthSuccess(response.data);
    })
    .catch(error =>{
      this.props.handleAuthFailure(error);
    });
  }

  logoutUser(){
    sessionStorage.removeItem('userData');
    this.setState({logged : "NO"});
  }


  render() {
    const responseGoogle = (response) => {
      this.signup(response);
    }

    const logout = (response) =>{
      this.logoutUser(response);
    }

    const onFailure = (response) => {
      console.log(`Something went wrong ${response}`);
    }


    const isLoggedIn = this.props.logged;
    let button;
    let userInfo;
    if(isLoggedIn === "NO"){
      button = 
        <GoogleLogin
          clientId="1029989204063-83br7bejtl1a6kjom4l7ap1er2nq6raj.apps.googleusercontent.com"
          render={renderProps => (
            <span onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</span>
          )}
          buttonText="Sign in with Google"
          onSuccess={responseGoogle}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
    }else if (isLoggedIn === "YES"){
      button = 
        <GoogleLogout
          clientId="1029989204063-83br7bejtl1a6kjom4l7ap1er2nq6raj.apps.googleusercontent.com"
          render={renderProps => (
            <span onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</span>
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
        >
        </GoogleLogout>
      userInfo = <UserInfo {...this.props} />
    }
    
    return (
      <ul className="header-nav_list">
        <li className="header-nav_item">
          {userInfo}
        </li>
        <li className="header-nav_item">
          {button}
        </li>
      </ul>
    )
  }
}
