import { IconHeart } from '@tabler/icons';
import React from 'react';

const Favorites = () => {
  return (
    <div className="flex align-center pl-5 cursor-pointer">
      <IconHeart size={30} color="white" />
    </div>
  );
};

export default Favorites;
