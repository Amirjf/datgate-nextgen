import React, { FC } from 'react';

type Props = {
  children: JSX.Element | string;
  color?: string;
};

const Button = ({ children, color = '[#ffffff3f]' }: Props) => {
  return (
    <button
      className={`bg-${color} py-3 md:px-6 rounded-sm hover:bg-white hover:text-black transition-colors duration-300`}
    >
      {children}
    </button>
  );
};

export { Button };
