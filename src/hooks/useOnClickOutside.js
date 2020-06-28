/* Base to https://usehooks.com/useOnClickOutside/ */
import { useEffect } from 'react';

const useOnClickOutside = (refs, handler) => {
  useEffect(() => {
    const listener = (event) => {
      const isContain = refs.some((ref) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return true;
        }
        return false;
      });

      if (!isContain) handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};

export default useOnClickOutside;
