import { BlurImage } from 'components/BlurImage';
import React, { FC } from 'react';

type Props = {
  title: string;
  image: string;
  alt: string;
};

export const TopBannerTitle: FC<Props> = ({ title, image, alt }) => {
  return (
    <div className="relative">
      <BlurImage
        className="w-full"
        width={1920}
        height={400}
        alt={alt}
        src={image}
      />
      <h1 className="text-white absolute inset-0 grid place-items-center text-5xl font-serif font-bold bg-gray-900/20">
        {title}
      </h1>
    </div>
  );
};
