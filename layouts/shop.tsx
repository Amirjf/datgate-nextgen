import React, { ReactNode } from 'react';
import { Header } from '@/components/ui';
import { InventoryProvider } from 'contexts/shop/InventoryContext';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { VehiclesProvider } from 'contexts/shop/VehiclesContext';

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <InventoryProvider>
        <VehiclesProvider>
          <Header />
          <div className="flex">{children}</div>
        </VehiclesProvider>
      </InventoryProvider>
    </div>
  );
};

export default ShopLayout;
