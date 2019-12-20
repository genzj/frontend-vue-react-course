import { useCallback, useState } from 'react';

const useToggle = (defaultActive = false) => {
  const [active, setActive] = useState(defaultActive);
  const toggle = useCallback(
    a => setActive(typeof a === 'boolean' ? a : !active),
    [active]
  );

  return [active, toggle];
};

export default useToggle;
