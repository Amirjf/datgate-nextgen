import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="relative w-full h-dynamic min-h-[650px] max-h-[650px] md:min-h-max md:max-h-max h-screen">
      <div className="absolute inset-0">
        <Image
          className="w-full h-full object-cover absolute top-0"
          width={2000}
          height={1080}
          alt="Hero"
          src="/bg2.png"
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
          <div className="hidden md:flex gap-x-4 justify-center pt-10">
            <Link href="/inventory">
              <Button>New Vehicles</Button>
            </Link>
            <Button>Pre-Owned Vehicles</Button>
            <Button>Current Incentives</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
