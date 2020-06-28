import React from 'react';
import { Text } from 'components/Typography';
import classnames from 'classnames';
import { MenuItemProps } from './props';
import './style.css';

const MenuItem = ({
  children,
  className,
  isDanger = false,
  onClick,
  value,
}) => {
  const classes = classnames(
    'c-menu__item',
    { 'c-menu__item--is-danger': isDanger },
    className
  );

  const clickHandler = (event) => {
    if (typeof onClick === 'function') {
      onClick(value, event);
    }
  };
  return (
    <li className={classes} onClick={clickHandler}>
      <Text>{children}</Text>
    </li>
  );
};

MenuItem.propTypes = MenuItemProps;

export default MenuItem;
