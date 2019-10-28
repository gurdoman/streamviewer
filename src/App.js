import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import axios from 'axios';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      logged : 'NO',
      user : {},
      loginError : ""
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginError = this.handleLoginError.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  checkLoginStatus(token){
    let tokenId = token;
    let data = {
      "tokenId" : tokenId,
      "source" : "streamviewer"
    }
    axios.post("http://localhost:3001/users", data)
    .then(response =>{
      this.setState({
        logged : "YES",
        user : response.data
      });
      localStorage.setItem('userData', JSON.stringify(response.data))
    }).catch(error =>{
      console.log(error);
      localStorage.removeItem('userData');
    })
  }

  componentDidMount(){
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.checkLoginStatus(userData.token);
    }
  }

  handleLogin(data){
    localStorage.setItem('userData', JSON.stringify(data));
    this.setState({
      logged : 'YES',
      user: data,
      loginError : ''
    })
  }

  handleLoginError(error){
    this.setState({loginError : error});
  }

  logoutUser(){
    localStorage.removeItem('userData');
    this.setState({
      logged : "NO",
      user : {}
    });
  }

  render() {
    return (
      <div className="container">
        <Menu 
          logged={this.state.logged} 
          user={this.state.user} 
          handleLogin={this.handleLogin}
          handleLoginError={this.handleLoginError}
          logoutUser={this.logoutUser}
        />
      </div>
    )
  }
}
