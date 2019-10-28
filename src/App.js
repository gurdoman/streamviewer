import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu/Menu';

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
  }

  handleLogin(data){
    this.setState({
      logged : 'YES',
      user: data
    })
  }

  handleLoginError(error){
    this.setState({loginError : error});
  }

  render() {
    return (
      <div className="container">
        <Menu 
          logged={this.state.logged} 
          user={this.state.user} 
          handleLogin={this.handleLogin}
          handleLoginError={this.handleLoginError}
        />
      </div>
    )
  }
}
