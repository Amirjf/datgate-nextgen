import React, { ReactNode } from 'react';
import { Header } from '@/components/ui';
import { InventoryProvider } from 'contexts/shop/InventoryContext';
import { VehiclesProvider } from 'contexts/shop/VehiclesContext';
import { UrlStructureProvider } from 'contexts/shop/UrlProvider';

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <InventoryProvider>
        <VehiclesProvider>
          <UrlStructureProvider>
            <Header />
            <div className="flex">{children}</div>
          </UrlStructureProvider>
        </VehiclesProvider>
      </InventoryProvider>
    </div>
  );
};

export default ShopLayout;
