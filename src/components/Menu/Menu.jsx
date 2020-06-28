import React, { Children, cloneElement, useCallback, memo } from 'react';
import classnames from 'classnames';
import { MenuProps } from './props';
import './style.css';

const Menu = ({ children, className, onClick }) => {
  const classes = classnames('c-menu', className);

  //global menu click
  const clickHandler = useCallback(
    (value, event) => {
      if (typeof onClick === 'function') {
        onClick(value, event);
      }
    },
    [onClick]
  );

  //enrichment children
  const getExtraPropsChild = useCallback(
    (child) => {
      return cloneElement(child, {
        onClick: (value, event) => {
          clickHandler(value, event);
        },
      });
    },
    [clickHandler]
  );

  const renderChildren = useCallback(() => {
    return Children.map(children, getExtraPropsChild);
  }, [children, getExtraPropsChild]);

  return <ul className={classes}>{renderChildren()}</ul>;
};

Menu.propTypes = MenuProps;

export default memo(Menu);
