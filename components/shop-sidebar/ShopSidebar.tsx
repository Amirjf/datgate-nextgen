import React from 'react';
import { Collapse } from '@/components/ui';
import useInfiniteVehicles from 'hooks/useInfiniteVehicles';
import { FiltersHandler } from 'components/filters-handler';

const ShopSidebar = () => {
  const { filterItems } = useInfiniteVehicles();

  const getFilters = filterItems && Object.entries(filterItems);

  return (
    <div className="sticky top-0">
      <div className="text-center border-b-black border-b-2 py-4 mx-5 mb-5">
        <span className="font-serif font-bold uppercase w-1/2">
          Select Filters
        </span>
      </div>
      <div className="h-full px-3 pb-4 bg-white">
        <ul>
          {getFilters?.map((field: any, i: number) => {
            const filterName = field[0];
            const filterValues = field[1];
            return (
              <li key={i}>
                <Collapse title={filterName}>
                  <FiltersHandler
                    filterName={filterName}
                    items={filterValues}
                  />
                </Collapse>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopSidebar;
