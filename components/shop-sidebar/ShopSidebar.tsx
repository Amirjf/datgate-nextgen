import React from 'react';
import { Collapse } from '@/components/ui';
import { FiltersHandler } from 'components/filters-handler';
import { useVehicles } from 'contexts/shop/VehiclesContext';

const ShopSidebar = () => {
  const { data }: any = useVehicles();

  return (
    <aside className="sticky top-0 overflow-y-auto left-0 z-40 w-0 md:w-96 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:border-gray-700">
      <div className="text-center border-b-black border-b-2 py-4 mx-5 mb-5">
        <span className="font-serif font-bold uppercase w-1/2">
          Select Filters
        </span>
      </div>
      {data?.selectedFilters?.map((filter: any) => (
        <span
          key={filter.label}
          className="text-sm bg-black text-white p-1 mr-1"
        >
          {filter.label}
        </span>
      ))}
      <div className="h-full px-3 pb-4 bg-white">
        <ul>
          {data?.filterItems.map((item: any, i: number) => {
            return (
              <li key={i}>
                <Collapse key={item.name} title={item.label}>
                  <FiltersHandler filterName={item.name} items={item.value} />
                </Collapse>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default ShopSidebar;
