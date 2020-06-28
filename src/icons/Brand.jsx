import React, { memo } from 'react';

const Brand = (props) => {
  return (
    <svg
      width='5.75em'
      height='1.5em'
      viewBox='0 0 115 30'
      fill='none'
      {...props}
    >
      <circle cx='15' cy='15' r='15' fill='currentColor' />
      <circle cx='70' cy='15' r='15' fill='currentColor' />
      <rect x='35' width='15' height='30' fill='currentColor' />
      <path d='M100 0H115L100 30H85L100 0Z' fill='currentColor' />
    </svg>
  );
};

export default memo(Brand);
