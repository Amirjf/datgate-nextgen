import React, { Children, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import clsx from 'clsx';

export const Slider = ({
  children,
  options,
  className,
}: {
  children: React.ReactNode;
  options: any;
  className?: string;
}) => {
  const arraySlides = Children.toArray(children);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    // initial: 0,
    ...options,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="">
        <div ref={sliderRef} className={clsx('keen-slider', className)}>
          {arraySlides?.map((slide, index) => (
            <div key={index} className="keen-slider__slide relative">
              {slide}
            </div>
          ))}
          {loaded && instanceRef.current && arraySlides?.length > 1 && (
            <>
              <Arrow
                left
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current?.track?.details?.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? 'opacity-30' : '';
  return (
    <div
      className={`w-10 h-10 absolute top-1/2 z-40 cursor-pointer bg-gray-400 p-2 rounded-full fill-white ${
        props.left ? 'left-0 ml-2' : 'left-auto right-0 mr-2'
      } ${disabeld}`}
    >
      <svg
        onClick={props.onClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        {props.left && (
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        )}
        {!props.left && (
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        )}
      </svg>
    </div>
  );
}
