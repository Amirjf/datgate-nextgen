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
          <div key={image}>
            <BlurImage
              src={image}
              // src={'/no-photo.jpg'}
              alt="vehicle-image"
              className="w-full"
              width={900}
              height={500}
              loading="eager"
              priority
              sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 50vw,
              53vw"
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
