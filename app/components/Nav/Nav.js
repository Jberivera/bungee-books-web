import React from 'react';
import style from './Nav.scss';
import { Link } from 'react-router';

import classNames from 'classNames/bind';

const css = classNames.bind(style);

const Nav = ({ children }) => {
  return (
    <div className={ css('nav') }>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/app">App</Link></li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
