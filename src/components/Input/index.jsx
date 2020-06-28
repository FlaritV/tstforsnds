import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { Props } from './props';
import './style.css';

const Input = forwardRef(
  (
    { className, name, autoFocus, onChange, value, disabled, type = 'text' },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={classnames('c-input', className)}
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

Input.propTypes = Props;

Input.displayName = 'Input';

export default Input;
