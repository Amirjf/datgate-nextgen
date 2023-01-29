import React, { FC } from 'react';

type Props = {
  children: JSX.Element | string;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-[#ffffff3f] py-3 md:px-6 rounded-sm hover:bg-white hover:text-black transition-colors duration-300">
      {children}
    </button>
  );
};

export { Button };
