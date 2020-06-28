import React, { memo } from 'react';
import classnames from 'classnames';
import { Props } from './props';
import './style.css';

const Spin = ({ className, isGlobal = false }) => {
  const classes = classnames(
    'c-spin',
    {
      'c-spin--is-global': isGlobal,
    },
    className
  );
  return (
    <div className={classes}>
      <svg width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='none'>
        <path
          d='M12 2V6'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.7'
          d='M12 18V22'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.92999 4.92999L7.75999 7.75999'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.6'
          d='M16.24 16.24L19.07 19.07'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.9'
          d='M2 12H6'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.4'
          d='M18 12H22'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.8'
          d='M4.92999 19.07L7.75999 16.24'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          opacity='0.3'
          d='M16.24 7.75999L19.07 4.92999'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />

        <animateTransform
          attributeType='xml'
          attributeName='transform'
          type='rotate'
          dur='0.7s'
          calcMode='discrete'
          values='0 0 0;45 0 0;90 0 0;135 0 0;180 0 0;225 0 0;270 0 0;315 0 0'
          repeatCount='indefinite'
        />
      </svg>
    </div>
  );
};

Spin.propTypes = Props;

export default memo(Spin);
