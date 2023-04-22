import { InventoryContext } from 'contexts/shop/InventoryContext';
import { fetchVehicles, useInfiniteQueryWithInitialData } from 'pages/shop';
import { useContext } from 'react';

const useApplyFilter = () => {
  const { addFilter, query, removeFilter }: any = useContext(InventoryContext);

  const { data }: any = useInfiniteQueryWithInitialData(
    ['vehicles', query],
    fetchVehicles,
    query
  );

  const onFilterChange = (event: any) => {
    const { value, name, checked } = event.target;

    if (checked) {
      // if (name === 'condition' && value === 'used') {
      //   addFilter({ key: name, value: value });
      //   addFilter({
      //     key: name,
      //     value: 'certified',
      //   });
      // }

      addFilter({ key: name, value: value });
    } else {
      removeFilter({
        key: name,
        value: value,
      });
    }
  };

  const checkHandler = (name: string, value: string) => {
    return data?.currentQuery[name].some((s: any) => s.toString() === value);
  };

  return { onFilterChange, checkHandler };
};

export { useApplyFilter };
