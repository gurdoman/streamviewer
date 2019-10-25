import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './Menu.css';
import MenuItem from './MenuItem';

export default class Menu extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header-nav">
          <div className="site-name">
            <Logo name="logo" className="logo" />
            <span className="site-name_name">streamviewer</span>
          </div>
          <ul className="header-nav_list">
            <MenuItem />
          </ul>
        </nav>
      </header>
    )
  }
}
