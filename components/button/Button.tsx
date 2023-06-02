import React, { FC } from 'react';

type Props = {
  children: JSX.Element | string;
  color?: string;
};

const Button = ({ children, color = '[#ffffff3f]' }: Props) => {
  return (
    <button
      className={`block w-full rounded bg-red-500 px-12 py-3 text-sm font-medium text-white shadow hover:text-white hover:bg-black focus:outline-none focus:ring active:text-rose-500 sm:w-auto transition-colors`}
    >
      {children}
    </button>
  );
};

export { Button };
