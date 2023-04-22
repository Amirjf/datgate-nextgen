import React from 'react';
import { Collapse } from '@/components/ui';
import { FiltersHandler } from 'components/filters-handler';

const ShopSidebar = ({ filters }: any) => {
  return (
    <aside className="sticky top-0 overflow-y-auto left-0 z-40 w-96 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:border-gray-700">
      {/* <div className="fixed top-0"> */}
      <div className="text-center border-b-black border-b-2 py-4 mx-5 mb-5">
        <span className="font-serif font-bold uppercase w-1/2">
          Select Filters
        </span>
      </div>
      <div className="h-full px-3 pb-4 bg-white">
        <ul>
          {filters?.map((item: any, i: number) => {
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
      {/* </div> */}
    </aside>
  );
};

export default ShopSidebar;
