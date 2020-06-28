import React from 'react';
import Brand from 'components/Brand';
import { Props } from './props';
import classnames from 'classnames';
import './style.css';

const Header = ({ children, className }) => {
  const classes = classnames('c-header', className);
  return (
    <header className={classes}>
      <Brand className='c-header__logo' />
      <div className='c-header__title'>API-консолька</div>
      {children}
    </header>
  );
};

Header.propTypes = Props;

export default Header;
