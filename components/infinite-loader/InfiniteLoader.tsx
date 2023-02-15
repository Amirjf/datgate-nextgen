import useInfiniteVehicles from 'hooks/useInfiniteVehicles';
import React, {
  ReactElement,
  useRef,
  useState,
  useEffect,
  useContext,
} from 'react';

type Props = {
  direction?: 'y' | 'x';
};

export const InfiniteLoader = ({
  direction = 'y',
}: Props): ReactElement | null => {
  const { fetchNextPage, hasNextPage, isFetching } = useInfiniteVehicles();

  const [element, setElement] = useState<any>(null);
  const prevPos = useRef(-1);

  const loadMore = (): void => {
    if (!hasNextPage) {
      return;
    }
    fetchNextPage();
  };

  useEffect(() => {
    const currentElement = element;
    const currentObserver = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const pos = firstEntry.boundingClientRect[direction];
        if (prevPos.current > pos || prevPos.current === -1) {
          loadMore();
        }
        prevPos.current = pos;
      },
      { threshold: 0.2 }
    );
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return (): void => {
      if (currentElement) {
        currentObserver.disconnect();
      }
    };
  }, [element]);

  if (!hasNextPage) {
    return null;
  }

  return isFetching ? null : <div ref={setElement} />;
};
