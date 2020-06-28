import React from 'react';
import classnames from 'classnames';
import { Props } from './props';
import './style.css';

const Footer = ({ className, children }) => {
  const classes = classnames('c-footer', className);
  return <footer className={classes}>{children}</footer>;
};

Footer.propTypes = Props;

export default Footer;
