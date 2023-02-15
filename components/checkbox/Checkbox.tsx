import React, { FC } from 'react';

export type CheckboxProps = {
  label?: any;
  value?: string | number | string[];
  checked?: any;
  name?: string;
  id?: any;
  count?: string | string[];
  onChange?: React.ChangeEventHandler;
  disabled?: boolean;
  loading?: boolean;
};

export type LabelProps = {
  checked?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({ label, count, ...props }) => {
  return (
    <div className="flex items-center justify-between">
      <label className="flex items-center cursor-pointer px-2 w-full relative rounded-sm text-gray-600 text-sm space-x-3 transition-colors py-4 md:py-2 hover:bg-[#edeeed]">
        <input className="accent-black w-5 h-5" type="checkbox" {...props} />
        {label && <span>{label}</span>}
        {count && (
          <span className="text-xs text-slate-400 absolute right-1">
            {count}
          </span>
        )}
      </label>
    </div>
  );
};

export { Checkbox };
