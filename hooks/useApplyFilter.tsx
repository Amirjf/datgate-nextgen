import { InventoryContext } from 'contexts/shop/InventoryContext';
import { useContext } from 'react';

export const formatValue = (term: string) => {
  return term.toLowerCase().replaceAll(' ', '_');
};

const useApplyFilter = (key: string) => {
  const { addFilter, removeFilter, filters }: any =
    useContext(InventoryContext);

  const onFilterChange = (event: any) => {
    if (event.target.checked) {
      addFilter({ key: key, value: event.target.value });
    } else {
      removeFilter({ key: key, value: event.target.value });
    }
  };

  const checkHandler = (name: string) => {
    const getKeyAppliedFilters = filters[key]?.map((term: string) => term);
    return getKeyAppliedFilters?.includes(name) ? true : false;
  };

  return { onFilterChange, checkHandler };
};

export default useApplyFilter;
