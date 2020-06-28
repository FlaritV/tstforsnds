import React, { useMemo } from 'react';
import classnames from 'classnames';
import { Brand as BrandIcon } from 'icons';
import { Props } from './props';
import './style.css';

const Brand = ({ className }) => {
  const classes = classnames('c-brand', className);
  return useMemo(
    () => (
      <div className={classes}>
        <BrandIcon />
      </div>
    ),
    [classes]
  );
};

Brand.propTypes = Props;

export default Brand;
