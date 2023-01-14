import { useEffect, useState } from 'react';
import { useSsr } from 'usehooks-ts';

const useScrollGoingUp = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isBrowser } = useSsr();

  const controlNavbar = () => {
    if (isBrowser) {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return show;
};

export default useScrollGoingUp;
