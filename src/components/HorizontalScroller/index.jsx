import React, { useEffect, useRef, useCallback } from 'react';
import classnames from 'classnames';
import { Props } from './props';
import './style.css';

const HorizontalScroller = ({ children, affix, className }) => {
  const wrapper = useRef(null);
  const onWheel = useCallback((event) => {
    event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    event.preventDefault();
  }, []);

  useEffect(() => {
    const element = wrapper.current;
    element.addEventListener('wheel', onWheel);
    return () => {
      element.removeEventListener('wheel', onWheel);
    };
  }, [onWheel]);

  const classes = classnames(
    'c-horizontal-scroller',
    { 'c-horizontal-scroller--has-affix': affix },
    className
  );
  return (
    <div className={classes}>
      <div className='c-horizontal-scroller__wrapper' ref={wrapper}>
        {children}
      </div>
      <div className='c-horizontal-scroller__affix'>{affix}</div>
    </div>
  );
};

HorizontalScroller.propTypes = Props;

export default HorizontalScroller;
