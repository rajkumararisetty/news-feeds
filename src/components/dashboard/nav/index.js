import React, {Component} from 'react';
import './styles.css';

export const NavBar = ({logout}) => (
  <div className="topnav">
    <p>Feeds</p>
    <a onClick={logout}>Logout</a>
  </div>
);

export default NavBar;
