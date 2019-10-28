import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './Menu.css';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor(props){
    super(props);

    this.handleAuthSuccess = this.handleAuthSuccess.bind(this);
    this.handleAuthFailure = this.handleAuthFailure.bind(this);
  }

  handleAuthSuccess(data){
    this.props.handleLogin(data);
  }

  handleAuthFailure(error){
    this.props.handleLoginError(error);
  }

  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <div className="site-name">
            <Logo name="logo" className="logo" />
            <span className="site-name_name">streamviewer</span>
          </div>
          <MenuItem 
            {...this.props} 
            handleAuthSuccess={this.handleAuthSuccess} 
            handleAuthFailure={this.handleAuthFailure}
          />
        </nav>
      </header>
    )
  }
}
