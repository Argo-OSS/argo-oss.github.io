import { useState, useEffect } from 'react';

const useDetectClose = (ref, initialState) => {
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isOpen, ref]);

  return [isOpen, setIsOpen];
};

export default useDetectClose;
