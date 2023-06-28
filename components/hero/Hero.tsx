import React from 'react';
import { Button } from '@/components/ui';
import Link from 'next/link';
import useSite from 'contexts/site/SiteContext';
import Image from 'next/image';

const Hero = () => {
  const { siteData }: any = useSite();
  const { hero_ctas, hero_image_url, hero_title, hero_subtitle }: any =
    siteData;

  const parsedCtas = JSON.parse(hero_ctas);
  const parsedImage = JSON.parse(hero_image_url);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:from-black/50 sm:to-black/25 bg-gradient-to-r z-20" />

      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-30">
        <div className="max-w-4xl text-center sm:text-left">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            {hero_title}
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            {hero_subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {parsedCtas.map((cta: any) => (
              <Link key={cta.link} href={cta.link}>
                <Button>{cta.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={parsedImage}
        loading="eager"
        priority
        sizes="(max-width: 768px) 20vw,
                  (max-width: 1200px) 50vw,
                  53vw"
        alt=""
        fill
        className="bg-no-repeat z-0 object-cover object-center"
      />
    </section>
  );
};

export { Hero };
