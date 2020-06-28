import React, { memo } from 'react';

const Dots = (props) => (
  <svg width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='none' {...props}>
    <g opacity='0.8'>
      <circle cx='12.2' cy='4.96771' r='2' fill='currentColor' />
      <circle cx='12.2' cy='11.9677' r='2' fill='currentColor' />
      <circle cx='12.2' cy='18.9677' r='2' fill='currentColor' />
    </g>
  </svg>
);

export default memo(Dots);
