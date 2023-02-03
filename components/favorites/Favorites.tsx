import { IconHeart } from '@tabler/icons';
import React, { FC } from 'react';

const Favorites: FC = () => {
  return (
    <div className="flex align-center pl-5 cursor-pointer">
      <IconHeart size={30} color="white" />
    </div>
  );
};

export { Favorites };
