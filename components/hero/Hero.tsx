import Image from 'next/image';
import React, { FC } from 'react';
import { BlurImage, Button } from '@/components/ui';
import Link from 'next/link';

type Props = {
  heroData: {
    ctas: any;
    heroType: 'video' | 'image';
    heroVideoUrl: string;
    heroImage: string;
  };
};

const Hero: FC<Props> = ({ heroData }) => {
  const { ctas, heroImage, heroType, heroVideoUrl } = heroData;
  return (
    <div className="relative w-full h-dynamic min-h-[650px] max-h-[650px] md:min-h-max md:max-h-max h-screen">
      <div className="absolute inset-0">
        <BlurImage
          className="w-full h-full object-cover absolute top-0"
          width={2000}
          height={1080}
          alt="Hero"
          src={heroImage}
          loading="eager"
          priority
          sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 50vw,
              53vw"
        />

        <div className="absolute w-full text-white top-[15%] left-0 text-center right-0 m-x-auto">
          <h1 className="text-lg sm:text-3xl md:text-5xl font-serif">
            Welcome to Mercedes-Benz of Seattle
          </h1>
          <div className="hidden md:flex md:flex-wrap gap-4 justify-center pt-10">
            {ctas.map((cta: any) => (
              <Link prefetch href={cta.link}>
                <Button>{cta.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
