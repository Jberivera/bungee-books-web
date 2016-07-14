import React from 'react';
import style from './Nav.scss';

import classNames from 'classNames/bind';

const css = classNames.bind(style);

const Nav = ({ children }) => {
  return (
    <div className={ css('nav') }>
      <ul>
        <li>Home</li>
        <li>Otro</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Nav;
