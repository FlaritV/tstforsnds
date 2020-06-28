// source https://github.com/danoc/react-use-clipboard/blob/master/src/index.tsx
import { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';

const useCopyClipboard = (text, options) => {
  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options && options.successDuration;

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    },
  ];
};

export default useCopyClipboard;
