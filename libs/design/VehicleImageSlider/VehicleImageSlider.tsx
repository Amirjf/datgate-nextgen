import { BlurImage } from 'components/BlurImage';
import { Slider } from 'components/slider';
import React, { FC } from 'react';

type Props = {
  photos: string[];
};

export const VehicleImageSlider: FC<Props> = ({ photos }) => {
  return (
    <>
      <Slider
        className="rounded"
        options={{
          slides: {
            perView: 1,
          },
        }}
      >
        {photos.map((image: any) => (
          <div>
            <BlurImage
              className="w-full"
              width={900}
              height={500}
              alt="vehicle-image"
              src={image}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
