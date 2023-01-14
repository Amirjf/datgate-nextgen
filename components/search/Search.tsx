import { IconSearch } from '@tabler/icons';
import React from 'react';

const Search = () => {
  return (
    <div className="lg:flex text-white hidden justify-end items-center">
      <button>
        <IconSearch size={35} />
      </button>
    </div>
  );
};

export default Search;
