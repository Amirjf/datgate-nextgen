import React, { ReactNode } from 'react';
import { Collapse, Header } from '@/components/ui';
import { InventoryProvider } from 'contexts/shop/InventoryContext';

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <InventoryProvider>
        <Header />
        <aside className="fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:border-gray-700">
          <div className="text-center border-b-black border-b-2 py-5 mx-5 mb-5">
            <span className="font-serif font-bold uppercase w-1/2">
              Select Filters
            </span>
          </div>
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul>
              <li>
                <Collapse>
                  <div className="flex pl-2 flex-col items-start space-y-4">
                    <label>
                      <input type="checkbox" />
                      Salam
                    </label>
                    <label>
                      <input type="checkbox" />
                      Salam
                    </label>
                    <label>
                      <input type="checkbox" />
                      Salam
                    </label>
                  </div>
                </Collapse>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-72">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {children}
          </div>
        </div>
      </InventoryProvider>
    </>
  );
};

export default ShopLayout;
