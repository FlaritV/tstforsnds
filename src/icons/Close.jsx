import React, { memo } from 'react';

const Close = (props) => (
  <svg width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='none' {...props}>
    <g opacity='0.8'>
      <path
        d='M3 3L21 21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        d='M21 3L3 21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </g>
  </svg>
);

export default memo(Close);
