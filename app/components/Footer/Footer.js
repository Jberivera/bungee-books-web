import React from 'react';
import style from './Footer.scss';

import classNames from 'classNames/bind';

const css = classNames.bind(style);

const Footer = ({ children }) => {
  return (
    <div className={ css('footer') }>
      <div>Telefono: 555-123-1212</div>
    </div>
  );
};

export default Footer;
