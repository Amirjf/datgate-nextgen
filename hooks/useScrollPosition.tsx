import { useState } from 'react';
import { useEventListener, useSsr } from 'usehooks-ts';

const useScrollPosition = (offset: number) => {
  const [show, setShow] = useState(true);
  const { isBrowser } = useSsr();
  const controlNavbar = () => {
    if (isBrowser) {
      if (window.scrollY > offset) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
  };

  useEventListener('scroll', controlNavbar);

  return show;
};

export default useScrollPosition;
