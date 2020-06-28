import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { Props } from './props';

import 'components/Input/style.css';
import './style.css';

const Textarea = forwardRef(
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
    const classes = classnames(
      'c-input',
      'c-textarea',
      {
        'c-textarea--is-code': isCode,
      },
      className
    );
    return (
      <textarea
        ref={ref}
        className={classes}
        name={name}
        autoFocus={autoFocus}
        onChange={onChange}
        value={value}
        disabled={disabled}
        type={type}
      />
    );
  }
);

Textarea.propTypes = Props;
Textarea.displayName = 'Textarea';

export default Textarea;
