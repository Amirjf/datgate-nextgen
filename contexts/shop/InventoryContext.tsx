import { createContext, useState } from 'react';
import { useMap } from 'usehooks-ts';

export const InventoryContext = createContext({});

export const InventoryProvider: React.FC<any> = ({ children }: any) => {
  const [filters, actions]: any = useMap();

  const addFilter = (filterToAdd: { key: string; value: string }) => {
    const { key, value } = filterToAdd;
    if (filters.has(key)) {
      actions.set(key, [...filters.get(key), value]);
    } else {
      actions.set(key, [value]);
    }
    return filters;
  };

  const removeFilter = (filterToRemove: { key: string; value: string }) => {
    const { key, value } = filterToRemove;
    if (filters.has(key)) {
      const updatedValue = filters.get(key).filter((v: any) => v !== value);
      if (updatedValue.length === 0) {
        actions.remove(key);
      } else {
        actions.set(key, updatedValue);
      }
    }
    return filters;
  };

  let filterObj: any = {};

  for (let [key, value] of filters) {
    filterObj[key] = filters.get(key);
  }

  return (
    <InventoryContext.Provider
      value={{ filters, filterObj, addFilter, removeFilter }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
