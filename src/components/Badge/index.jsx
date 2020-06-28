import React from 'react';
import classnames from 'classnames';
import { Props } from './props';
import './style.css';

const Badge = ({ className, type }) => {
  return (
    <span
      className={classnames('c-badge', `c-badge--type--${type}`, className)}
    />
  );
};

Badge.propTypes = Props;

export default Badge;
