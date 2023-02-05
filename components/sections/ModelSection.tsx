import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui';

const ModelSection = () => {
  return (
    <section
      className="my-20 p-4 h-96 bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/bg-model.webp")' }}
    >
      <div className="relative">
        <div className="absolute top-36 lg:top-10">
          <Image src="/eqs.png" width={737} height={439} alt="eqs" />
        </div>
      </div>
      <div className="flex md:pl-20 z-50 text-white gap-y-4 flex-col justify-start lg:w-1/2 ml-auto items-start lg:items-start h-full pt-0 md:pt-14">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Mercedes-Benz EQS
        </h1>
        <p className="text-white font-light">
          The future of driving begins now.
        </p>
        <Button>Explore EQS</Button>
      </div>
    </section>
  );
};

export { ModelSection };
