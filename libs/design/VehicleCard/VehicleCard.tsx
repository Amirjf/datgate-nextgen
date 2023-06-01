import { BlurImage } from 'components/BlurImage';
import { VehicleModel } from 'libs/models/VehicleModels';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  car: VehicleModel;
};

export const VehicleCard: FC<Props> = ({ car }) => {
  const {
    title_short,
    photo,
    stock_number,
    mileage,
    formatted_price,
    condition,
    year,
    make,
    model,
    vin_number,
  } = car;
  return (
    <Link
      className="bg-white rounded"
      href={`/vehicle/${condition}/${year}/${make}/${model}/${vin_number}`}
    >
      <div className="flex flex-col h-full hover:border-2 hover:border-primary border-2 border-gray-100 transition-all">
        <div className="">
          <BlurImage
            src={photo}
            className="w-full"
            // src={'/no-photo.jpg'}
            width={600}
            height={300}
            alt={title_short}
            loading="eager"
            priority
            sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 50vw,
              53vw"
          />
        </div>
        <div className="py-2 px-2 flex flex-col justify-between h-full">
          <div className="uppercase text-xs pb-2">
            <span className={`condition-${condition} pr-1 border-r font-bold`}>
              {condition}
            </span>
            <span className="pl-1 text-gray-500">{stock_number}</span>
          </div>

          <h2 className="font-medium">{title_short}</h2>

          <div className="flex justify-between items-center pt-4">
            <span className="text-gray-400 font-semibold text-sm">
              {mileage} miles
            </span>
            <span className="font-bold text-lg">{formatted_price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
