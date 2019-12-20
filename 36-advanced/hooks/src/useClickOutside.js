import { useCallback, useRef } from 'react';
import useEventListener from './useEventListener';

const useClickOutside = (callback, disabled = false) => {
  if (disabled) return;

  const element = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (element.current && !element.current.contains(event.target)) {
      callback(event);
    }
  }, [callback]);

  useEventListener('click', handleClickOutside, true);

  return element;
};

export default useClickOutside;
