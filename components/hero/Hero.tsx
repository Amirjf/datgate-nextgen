import React from 'react';
import { BlurImage, Button } from '@/components/ui';
import Link from 'next/link';
import useSite from 'contexts/site/SiteContext';
import Image from 'next/image';

const Hero = () => {
  const { hero_ctas, hero_image_url, hero_title, hero_subtitle }: any =
    useSite();

  const parsedCtas = JSON.parse(hero_ctas);
  const parsedImage = JSON.parse(hero_image_url);

  return (
    // <div className="relative w-full h-dynamic min-h-[500px] max-h-[500px] md:min-h-max md:max-h-max">
    //   <div className="absolute inset-0">
    //     <BlurImage
    //       className="w-full object-cover absolute top-0"
    //       width={2000}
    //       height={500}
    //       alt="Hero"
    //       src={parsedImage}
    //       loading="eager"
    //       priority
    //       sizes="(max-width: 768px) 20vw,
    //           (max-width: 1200px) 50vw,
    //           53vw"
    //     />

    //     <div className="absolute w-full text-white top-[15%] left-0 text-center right-0 m-x-auto">
    //       <h1 className="text-lg py-4 text-white sm:text-2xl md:text-5xl font-serif drop-shadow-lg">
    //         {hero_title}
    //       </h1>
    //       <div className="hidden md:flex md:flex-wrap gap-4 justify-center pt-10">
    //         {parsedCtas.map((cta: any) => (
    //           <Link key={cta.link} prefetch href={cta.link}>
    //             <Button color="primary">{cta.label}</Button>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="relative">
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:from-black/50 sm:to-black/25 bg-gradient-to-r z-20" />

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-30">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            {hero_title}
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            {hero_subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            {parsedCtas.map((cta: any) => (
              <Link key={cta.link} prefetch href={cta.link}>
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
