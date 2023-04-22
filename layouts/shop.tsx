import React, { ReactNode } from 'react';
import { Header } from '@/components/ui';
import { InventoryProvider } from 'contexts/shop/InventoryContext';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <InventoryProvider>
        <Header />
        {children}
      </InventoryProvider>
    </div>
  );
};

export default ShopLayout;
