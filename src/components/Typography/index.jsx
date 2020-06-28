import React from 'react';
import classnames from 'classnames';
import './style.css';
import { Props } from './props';

export const Text = ({ children, className, size, type }) => {
  const classes = classnames(
    'c-text',
    { [`c-text--type--${type}`]: type },
    { [`c-text--size--${size}`]: size },
    className
  );

  return <span className={classes}>{children}</span>;
};

export const Title = ({ children, className, size, type }) => {
  const classes = classnames('c-title', className);

  return (
    <Text className={classes} size={size} type={type}>
      {children}
    </Text>
  );
};

Text.propTypes = Props;
Title.propTypes = Props;
