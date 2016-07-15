import React from 'react';
import style from './Root.scss';

import classNames from 'classNames/bind';

const css = classNames.bind(style);

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Root = ({ children }) => {
  return (
    <div className="main-container">
      <Nav />
      <div className={ css('container') }>
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Root;
