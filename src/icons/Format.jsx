import React, { memo } from 'react';

const Format = (props) => (
  <svg width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='none' {...props}>
    <g opacity='0.8'>
      <path
        d='M21 10H7'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11 6H3'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 14H7'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7 18H3'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

export default memo(Format);
