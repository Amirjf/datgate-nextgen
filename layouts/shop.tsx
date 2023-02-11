import React, { ReactNode } from 'react';
import { Header } from '@/components/ui';
import { InventoryProvider } from 'contexts/shop/InventoryContext';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <InventoryProvider>
        <Header />
        <aside className="fixed top-20 overflow-y-auto left-0 z-40 w-72 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:border-gray-700">
          <ShopSidebar />
        </aside>

        <div className="p-4 sm:ml-72">{children}</div>
      </InventoryProvider>
    </div>
  );
};

export default ShopLayout;
