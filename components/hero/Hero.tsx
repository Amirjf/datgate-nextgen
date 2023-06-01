import React from 'react';
import { BlurImage, Button } from '@/components/ui';
import Link from 'next/link';
import useSite from 'contexts/site/SiteContext';

const Hero = () => {
  const { hero_ctas, hero_image_url, hero_title }: any = useSite();

  const parsedCtas = JSON.parse(hero_ctas);
  const parsedImage = JSON.parse(hero_image_url);

  return (
    <div className="relative w-full h-dynamic min-h-[500px] max-h-[500px] md:min-h-max md:max-h-max">
      <div className="absolute inset-0">
        <BlurImage
          className="w-full object-cover absolute top-0"
          width={2000}
          height={500}
          alt="Hero"
          src={parsedImage}
          loading="eager"
          priority
          sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 50vw,
              53vw"
        />

        <div className="absolute w-full text-white top-[15%] left-0 text-center right-0 m-x-auto">
          <h1 className="text-lg py-4 text-white sm:text-2xl md:text-5xl font-serif drop-shadow-lg">
            {hero_title}
          </h1>
          <div className="hidden md:flex md:flex-wrap gap-4 justify-center pt-10">
            {parsedCtas.map((cta: any) => (
              <Link key={cta.link} prefetch href={cta.link}>
                <Button color="primary">{cta.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
