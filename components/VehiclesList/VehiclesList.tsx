import clsx from 'clsx';
import { useVehicles } from 'contexts/shop/VehiclesContext';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import React from 'react';
import { VehicleCard } from '@/design';
import { VehicleModel } from 'libs/models/VehicleModels';
import { useRouter } from 'next/router';

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
      <div className="p-2 w-full">
        <div className="grid grid-cols-1 w-full justify-center gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 items Grid mb-4">
          {data?.vehicles.map((cars: any) => {
            return cars.map((car: VehicleModel) => (
              <VehicleCard key={car.vin_number} car={car} />
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
