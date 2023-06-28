import React from 'react';
import { Container } from '@/components/ui';
import Image from 'next/image';
import { IconArrowRight } from '@tabler/icons';
import Link from 'next/link';

const AboutDealer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundImage:
          'linear-gradient(258.13deg, rgba(0, 0, 0, 0.81) 51.54%, rgba(0, 0, 0, 0.7857) 108.97%), url("/dealership.jpg")',
      }}
      className="relative py-20 bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
    >
      <div className="flex flex-col lg:flex-row lg:mx-16 gap-10 items-center lg:items-start justify-center text-white">
        <div className="w-11/12 lg:w-1/2">
          <Image
            className="w-full h-full object-cover"
            src="/dealership.jpg"
            width={500}
            height={400}
            alt="dealership"
          />
        </div>
        <div className="flex flex-col items-start w-11/12 pb-5 lg:w-1/2">
          <Link href="/about-us" className="border-b mb-2 w-20 text-center">
            About Us
          </Link>
          <h3 className="text-3xl font-extrabold pb-6">
            Mercedes-Benz of Seattle
          </h3>
          <p className="text-gray-100">
            The Mercedes-Benz of Seattle dealership is located in Seattle,
            Washington and serves drivers in the areas of Eagle River, Palmer,
            Wasilla, and all throughout the great state of Washington with
            high-quality and customer-focused Mercedes-Benz, Metris, Sprinter
            sales and service.
          </p>
          <button className="pt-10 flex gap-2 items-center text-xs">
            Read More
            <IconArrowRight size={15} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export { AboutDealer };
