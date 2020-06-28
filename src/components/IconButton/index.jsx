import React, { forwardRef, memo } from 'react';
import classnames from 'classnames';
import { Text } from 'components/Typography';
import { Props } from './props';
import './style.css';

const IconButton = forwardRef(
  (
    {
      icon: Icon,
      children,
      placement = 'left',
      className,
      type = 'button',
      disabled,
      onClick,
    },
    ref
  ) => {
    const classes = classnames(
      'c-icon-button',
      `c-icon-button--placement--${placement}`,
      { [`c-icon-button--is-single`]: !children },
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        <Icon className='c-icon-button__icon' />
        {children && <Text>{children}</Text>}
      </button>
    );
  }
);

IconButton.propTypes = Props;
IconButton.displayName = 'IconButton';

export default memo(IconButton);
