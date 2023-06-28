import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui';
import Link from 'next/link';

const ModelSection = () => {
  return (
    <section
      className="my-20 p-4 h-96 bg-no-repeat bg-cover"
      style={{ backgroundImage: 'url("/bg-model.webp")' }}
    >
      <div className="relative">
        <div className="absolute top-36 lg:top-0 left-0">
          <Image
            src="/ariya.png"
            width={937}
            height={439}
            loading="lazy"
            alt="ariya"
          />
        </div>
      </div>
      <div className="flex md:pl-20 z-50 text-white gap-y-4 flex-col justify-start lg:w-1/2 ml-auto items-start lg:items-start h-full pt-0 md:pt-14">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">
          Nissan Ariya
        </h1>
        <p className="text-white font-light">
          The future of driving begins now.
        </p>
        <Link href="/new-vehicles/ariya">
          <Button>Explore Ariya</Button>
        </Link>
      </div>
    </section>
  );
};

export { ModelSection };
