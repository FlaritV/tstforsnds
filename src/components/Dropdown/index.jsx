import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import classnames from 'classnames';
import { useOnClickOutside } from 'hooks';
import Overlay from './Overlay';
import Trigger from './Trigger';
import { placement } from './placement';
import './style.css';

const Dropdown = ({ children, className, overlay, onVisibleChange }) => {
  const [visible, toggleVisible] = useState(false);

  const triggerRef = useRef(null);
  const overlayRef = useRef(null);

  const dropdownVisibleHandler = useCallback(
    (visible) => {
      toggleVisible(visible);
      if (typeof onVisibleChange === 'function') {
        onVisibleChange(visible);
      }
    },
    [onVisibleChange]
  );

  const getOverlayElement = useCallback(
    () => (typeof overlay === 'function' ? overlay() : overlay),
    [overlay]
  );

  const onClick = useCallback(
    (event) => {
      const overlayProps = getOverlayElement().props;
      dropdownVisibleHandler(false);

      if (overlayProps.onClick) {
        overlayProps.onClick(event);
      }
    },
    [dropdownVisibleHandler, getOverlayElement]
  );

  // Click outside overlay or trigger close dd
  useOnClickOutside([overlayRef, triggerRef], () => {
    dropdownVisibleHandler(false);
  });

  const showDropdown = useCallback(() => {
    dropdownVisibleHandler(true);
  }, [dropdownVisibleHandler]);

  //Hide on scroll
  useEffect(() => {
    const onScroll = () => {
      dropdownVisibleHandler(false);
    };

    /* listener with enable useCapture
      https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener
    */
    window.addEventListener('scroll', onScroll, true);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [dropdownVisibleHandler]);

  const triggerClassNames = classnames('c-dropdown-trigger', {
    'c-dropdown-trigger--is-open': visible,
  });
  const classes = classnames('c-dropdown', className, {
    'c-dropdown--is-visible': visible,
  });

  return (
    <>
      <Trigger
        ref={triggerRef}
        className={triggerClassNames}
        onClick={showDropdown}
      >
        {children}
      </Trigger>

      <Overlay>
        <div ref={overlayRef} className={classes}>
          {React.cloneElement(overlay, { onClick })}
          {placement(overlayRef, triggerRef)}
        </div>
      </Overlay>
    </>
  );
};

export default memo(Dropdown);
