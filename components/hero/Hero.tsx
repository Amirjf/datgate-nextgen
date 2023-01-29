import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui';
const Hero = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          className="w-full animate-wiggle"
          width={1920}
          height={1080}
          alt="Hero"
          src="/bg.png"
          loading="eager"
          priority
          sizes="(max-width: 768px) 20vw,
              (max-width: 1200px) 50vw,
              53vw"
        />

        <div className="absolute w-full text-white top-[10%] left-0 text-center right-0 m-x-auto">
          <h1 className="text-lg sm:text-3xl md:text-5xl font-serif">
            Welcome to Mercedes-Benz of Seattle
          </h1>
          <div className="hidden md:flex gap-x-4 justify-center pt-10">
            <Button>New Vehicles</Button>
            <Button>Pre-Owned Vehicles</Button>
            <Button>Current Incentives</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
