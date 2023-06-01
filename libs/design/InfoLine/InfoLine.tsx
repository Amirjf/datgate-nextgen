import clsx from 'clsx';
import React, { FC } from 'react';

type Props = {
  label: string;
  value: string;
  className?: string;
};

export const InfoLine: FC<Props> = ({ label, value, className }) => {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500 capitalize">{label}</span>
      <span className={clsx('font-bold', className)}>{value}</span>
    </div>
  );
};
