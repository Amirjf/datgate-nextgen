import clsx from 'clsx';
import { useVehicles } from 'contexts/shop/VehiclesContext';

import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BlurImage } from '..';

export const VehiclesList = () => {
  const { data, fetchNextPage, hasNextPage }: any = useVehicles();

  const loadMoreButtonRef = React.useRef(null);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <div className="p-4 w-full">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {data?.vehicles.map((cars: any, page: number) => {
            return cars.map((car: any) => (
              <div key={car.vehicle_id} className="flex flex-col">
                <Link href={`/vehicle/${car.id}`}>
                  <BlurImage
                    src={car.photo || '/no-photo.jpg'}
                    width={600}
                    height={300}
                    alt={car.title_short}
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 50vw,
              53vw"
                  />
                </Link>
                <Link
                  href={`/vehicle/${car.vehicle_id}`}
                  className="text-black"
                >
                  {car.title_short}
                </Link>
              </div>
            ));
          })}

          {Array.from(Array(4).keys()).map((_, index) => (
            <div
              ref={loadMoreButtonRef}
              key={index}
              className={clsx('flex min-h-[300px] bg-gray-200', {
                hidden: !hasNextPage,
              })}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
