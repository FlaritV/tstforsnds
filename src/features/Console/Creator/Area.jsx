import React, { forwardRef } from 'react';
import classnames from 'classnames';
import Textarea from 'components/Textarea';
import { AreaProps } from './props';

const Area = forwardRef(
  (
    {
      className,
      isCode = false,
      name,
      autoFocus,
      onChange,
      value,
      disabled,
      type,
    },
    ref
  ) => {
    const classes = classnames('request-creator__area', className);
    return (
      <Textarea
        ref={ref}
        name={name}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        disabled={disabled}
        type={type}
        isCode={isCode}
        className={classes}
      />
    );
  }
);

Area.propTypes = AreaProps;
Area.displayName = 'Area';

export default Area;
