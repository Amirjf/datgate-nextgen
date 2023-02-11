import useApplyFilter from 'hooks/useApplyFilter';
import React from 'react';
import { Checkbox } from '@/components/ui';
const FiltersHandler = ({ filterName, items }: any) => {
  const { onFilterChange } = useApplyFilter(filterName);
  return (
    <ul style={{ paddingBottom: 10, listStyle: 'none' }}>
      {items.map((item: any, i: number) => {
        return (
          <li key={i}>
            <Checkbox
              onChange={onFilterChange}
              name={item.label}
              value={item.label}
              label={item.label}
              //   checked={checkHandler(item.label)}
              id={item.label}
              count={item.count}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { FiltersHandler };
