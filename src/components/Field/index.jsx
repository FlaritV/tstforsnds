import React, { forwardRef } from 'react';
import classnames from 'classnames';
import Input from 'components/Input';
import Label from 'components/Label';
import { Props } from './props';
import './style.css';

const Field = forwardRef(
  (
    {
      className,
      title,
      sub,
      invalid = false,
      component: Component = Input,
      disabled,
      onChange,
      value,
      autoFocus,
      name,
      type = 'text',
    },
    ref
  ) => {
    const classes = classnames(
      'c-field',
      {
        'c-field--is-invalid': invalid,
      },
      className
    );

    return (
      <Label title={title} sub={sub} className={classes}>
        <Component
          name={name}
          autoFocus={autoFocus}
          onChange={onChange}
          value={value}
          ref={ref}
          className='c-field__input'
          disabled={disabled}
          type={type}
        />
      </Label>
    );
  }
);

Field.propTypes = Props;
Field.displayName = 'Field';

export default Field;
