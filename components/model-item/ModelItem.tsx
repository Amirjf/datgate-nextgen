import React, { FC } from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  count: string | number;
  image: string;
};

export const ModelItem: FC<Props> = ({ title, image, count }) => {
  return (
    <div className="relative hover:-translate-y-1 rounded-full h-48 w-48 md:h-52 md:w-52 p-3 flex flex-col items-center transition-all duration-500 space-y-4 bg-size-100 bg-gradient-to-t to-[#e5e5e582] from-[#d2030300] bg-pos-100">
      <span className="absolute flex-col flex justify-center leading-10 items-center top-3">
        <span className="bg-gradient-to-t to-primary from-[#ffffff45] opacity-70 flex justify-center flex-col items-center text-[3rem] font-extrabold text-transparent bg-clip-text">
          {count}
        </span>
        <span className="text-gray-400 opacity-50">IN STOCK</span>
      </span>
      <a href="#" className="flex pt-10 flex-col justify-start items-center">
        <Image src={image} width={200} height={80} alt={title} />
        <h3 className="text-lg text-gray-500 font-extrabold">{title}</h3>
      </a>
    </div>
  );
};
