import clsx from 'clsx';
import React, { FC } from 'react';

type Props = {
  children: JSX.Element | string;
  color?: string;
  className?: string;
  // block?: boolean;
};

const Button = ({ children, color = 'bg-red-600', className }: Props) => {
  return (
    <button
      className={clsx(
        'block rounded px-12 py-4 font-medium text-white shadow hover:text-white hover:bg-black focus:outline-none focus:ring active:text-rose-500 transition-colors',
        color,
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
