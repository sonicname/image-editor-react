import { useCallback, useState } from 'react';

const useToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = useCallback(() => setIsToggled((isToggled) => !isToggled), []);

  return {
    isToggled,
    toggle,
  };
};

export default useToggle;
