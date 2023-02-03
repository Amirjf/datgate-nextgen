import { IconSearch } from '@tabler/icons';
import React from 'react';

const Search = () => {
  return (
    <div className="lg:flex text-white hidden justify-start items-center w-full">
      <div className="relative flex items-center w-full">
        <span className="absolute pl-3">
          <IconSearch size={25} color="#fff" />
        </span>
        <input
          placeholder='Search " Mercedes-Benz CLA "'
          className="bg-transparent w-full pl-10 py-2 outline-none focus:border-primary transition-all border-2 border-gray-700 rounded-full"
        />
      </div>
    </div>
  );
};

export {Search};
