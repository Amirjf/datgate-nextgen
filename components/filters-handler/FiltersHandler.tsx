import React, { useContext } from 'react';
import { Checkbox } from '@/components/ui';
import { useApplyFilter } from 'hooks/useApplyFilter';
import { InventoryContext } from 'contexts/shop/InventoryContext';
const FiltersHandler = ({ filterName, items }: any) => {
  const { onFilterChange, checkHandler } = useApplyFilter();
  return (
    <ul style={{ paddingBottom: 10, listStyle: 'none' }}>
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
    </ul>
  );
};

export { FiltersHandler };
