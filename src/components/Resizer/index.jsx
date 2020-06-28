import React, { useEffect, useRef, useCallback, memo } from 'react';
import Lockr from 'lockr';
import { Dots } from 'icons';
import { Props } from './props';
import './style.css';

const DEFAULT_WIDTHS = [50, 50];

const Resizer = ({ className, minWidth = 50, localStorageKey }) => {
  const resizerRef = useRef(null);

  const state = useRef({
    dragging: false,
    mouseX: 0,
    startPos: 0,
    startWidthPrev: 0,
    startWidthNext: 0,
  });

  const startDrag = () => {
    state.current.dragging = true;
    state.current.startPos = state.current.mouseX;

    if (resizerRef.current) {
      const prevSibling = resizerRef.current.previousSibling;
      const nextSibling = resizerRef.current.nextSibling;

      if (prevSibling) state.current.startWidthPrev = prevSibling.clientWidth;
      if (nextSibling) state.current.startWidthNext = nextSibling.clientWidth;
    }
  };

  const endDrag = useCallback(() => {
    state.current.dragging = false;
    if (localStorageKey) {
      Lockr.set(localStorageKey, state.current.widths || DEFAULT_WIDTHS);
    }
  }, [localStorageKey]);

  const onMouseMove = useCallback(
    (event) => {
      state.current.mouseX = event.touches
        ? event.touches[0].screenX
        : event.screenX;

      if (!state.current.dragging) {
        return;
      }

      const moveDiff = state.current.startPos - state.current.mouseX;
      let newPrev = state.current.startWidthPrev - moveDiff;
      let newNext = state.current.startWidthNext + moveDiff;

      if (newPrev < minWidth) {
        newPrev = minWidth;
        newNext += newPrev - minWidth;
      } else if (newNext < minWidth) {
        newNext = minWidth;
        newPrev += newNext - minWidth;
      }

      const parent = resizerRef.current.parentNode;
      const parentWidth = parent.offsetWidth;
      const prevWidthPerc = (newPrev / parentWidth) * 100;
      const nextWidthPerc = (newNext / parentWidth) * 100;

      resizerRef.current.previousSibling.style.width = `${prevWidthPerc}%`;
      resizerRef.current.nextSibling.style.width = `${nextWidthPerc}%`;

      if (localStorageKey) {
        state.current.widths = [prevWidthPerc, nextWidthPerc];
      }
    },
    [minWidth, localStorageKey]
  );

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchmove', onMouseMove);
    document.addEventListener('touchend', endDrag);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', endDrag);
      document.removeEventListener('touchmove', onMouseMove);
      document.removeEventListener('touchend', endDrag);
    };
  }, [endDrag, onMouseMove]);

  /*
    if has *localStorageKey* and value in localStorage
    set initial width for prev and next 
  */
  useEffect(() => {
    if (resizerRef.current) {
      const prev = resizerRef.current.previousSibling;
      const next = resizerRef.current.nextSibling;

      if (localStorageKey && prev && next) {
        Lockr.get(localStorageKey);
        const [prevWidth, nextWidth] = Lockr.get(
          localStorageKey,
          DEFAULT_WIDTHS
        );

        prev.style.width = `${prevWidth}%`;
        next.style.width = `${nextWidth}%`;
      }
    }
  }, [localStorageKey]);

  return (
    <div
      ref={resizerRef}
      className={className}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
    >
      <Dots className='c-resizer__indicator' />
    </div>
  );
};

Resizer.propTypes = Props;

export default memo(Resizer);
