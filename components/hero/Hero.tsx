import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <Image
          className="w-full"
          width={1920}
          height={1080}
          alt="Hero"
          src="/bg.png"
          // sizes="(max-width: 768px) 30vw,
          //     (max-width: 1200px) 50vw,
          //     53vw"
        />
      </div>
    </div>
  );
};

export { Hero };
