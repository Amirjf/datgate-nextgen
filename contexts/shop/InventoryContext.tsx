import { createContext, useState } from 'react';

export const InventoryContext = createContext({});

export const InventoryProvider: React.FC<any> = ({ children }: any) => {
  const [filters, setFilters] = useState({});
  return (
    <InventoryContext.Provider value={filters}>
      {children}
    </InventoryContext.Provider>
  );
};
