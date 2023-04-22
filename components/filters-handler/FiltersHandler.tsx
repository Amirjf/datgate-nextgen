import React from 'react';
import { Checkbox } from '@/components/ui';
import { useApplyFilter } from 'hooks/useApplyFilter';
import { useVehicles } from 'contexts/shop/VehiclesContext';

const FiltersHandler = ({ filterName, items }: any) => {
  const { isFetching, isFetchingNextPage }: any = useVehicles();
  const { onFilterChange, checkHandler } = useApplyFilter();

  return (
    <ul className="relative list-none pb-3">
      {items.map((item: any, i: number) => {
        const value = item.value.toString();
        const label = item.label;
        return (
          <li key={i}>
            <Checkbox
              onChange={onFilterChange}
              name={filterName}
              value={value}
              checked={checkHandler(filterName, value.toString())}
              id={value}
              label={`${label}`}
              count={item.count}
              // disabled={shouldBeDisabled(value)}
            />
          </li>
        );
      })}
      {isFetching && !isFetchingNextPage && (
        <div className="absolute inset-0 opacity-70 bg-white h-full" />
      )}
    </ul>
  );
};

export { FiltersHandler };
