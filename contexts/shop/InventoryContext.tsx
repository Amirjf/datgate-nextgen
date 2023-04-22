import { createContext, useCallback, useState } from 'react';
import { useMap } from 'usehooks-ts';
import { handleAddingFilter, handleRemovingFilter } from './utils';

export const InventoryContext = createContext({});

export const InventoryProvider: React.FC<any> = ({ children }: any) => {
  const [query, setQuery] = useState({});

  const updateState = (updates: any) => {
    const updatedState = { ...query, ...updates };
    setQuery(updatedState);
  };

  const addFilter = useCallback((filterToAdd: any) => {
    if (filterToAdd.key) {
      setQuery((currentFilters: any) =>
        handleAddingFilter(currentFilters, filterToAdd)
      );
    }
  }, []);

  const removeFilter = useCallback((filterToRemove: any) => {
    setQuery((currentFilters: any) =>
      handleRemovingFilter(currentFilters, filterToRemove)
    );
  }, []);

  return (
    <InventoryContext.Provider
      value={{ query, setQuery, updateState, addFilter, removeFilter }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
