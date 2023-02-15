import { IconBrandGoogle } from '@tabler/icons';
import { Slider } from 'components/slider';
import Image from 'next/image';
import React from 'react';

export const ReviewsCarousel = () => {
  return (
    <div className="bg-black text-white p-20">
      <Slider
        options={{
          slides: {
            perView: 3,
            spacing: 15,
          },
          breakpoints: {
            '(max-width: 768px)': {
              slides: { perView: 1 },
            },
            '(min-width: 768px)': {
              slides: { perView: 3, spacing: 10 },
            },
          },
        }}
      >
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </Slider>
    </div>
  );
};

export const ReviewItem = () => {
  return (
    <div className="flex w-full">
      <div>
        <div className="flex pb-5">
          <IconBrandGoogle size={50} />
          <div className="flex flex-col px-5">
            <span className="font-extrabold pb-1">SALAM</span>
            <span>
              <Image src="/stars.svg" width={100} height={20} alt="rating" />
            </span>
          </div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium
          sit quo debitis est officia distinctio, enim vel dolorem sint
          asperiores recusandae ullam. Tempore, ab rerum molestiae nihil unde
          pariatur.
        </p>
      </div>
    </div>
  );
};
