import React from 'react';
import classnames from 'classnames';
import { Text } from 'components/Typography';
import Spin from 'components/Spin';
import { Props } from './props';
import './style.css';

const Button = ({
  className,
  children,
  loading = false,
  type = 'button',
  disabled = false,
  onClick,
}) => {
  const classes = classnames(
    'c-button',
    { 'c-button--is-loading': loading },
    className
  );
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Spin /> : <Text type='inverse'>{children}</Text>}
    </button>
  );
};

Button.propTypes = Props;

export default Button;
