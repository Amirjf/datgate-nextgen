import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createContext, useContext } from 'react';
import { InventoryContext } from './InventoryContext';

export const VehiclesContext = createContext({});

export const fetchVehicles = async ({ page, query = {} }: any) => {
  const { data } = await axios.post(
    'https://api2.dealertower.com/inventory/nissanofportland.com',
    {
      page: page + 1,
      ...query,
    }
  );
  return data.data;
};

export const useInfiniteQueryWithInitialData = (
  queryKey: string[],
  apiCall: any,
  query: any
) => {
  return useInfiniteQuery(
    queryKey,
    async ({ pageParam = 0 }) => apiCall({ page: pageParam, query }),
    {
      // staleTime: Infinity,
      // cacheTime: Infinity,
      getNextPageParam: (lastPage) => {
        if (lastPage.payload.has_next) {
          return lastPage.payload.page;
        }
        return false;
      },
      select(data) {
        return {
          vehicles: data.pages.map((vehiclesArray) => vehiclesArray.rows_data),
          filterItems: data.pages[0].available_filters,
          currentQuery: data.pages[0].payload,
          selectedFilters: data.pages[0].selected_filters,
          ...data,
        };
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};

export const VehiclesProvider = ({ children }: any) => {
  const { query }: any = useContext(InventoryContext);
  console.log(query, 'query');
  const data = useInfiniteQueryWithInitialData(
    ['vehicles', query],
    fetchVehicles,
    query
  );

  return (
    <VehiclesContext.Provider value={data}>{children}</VehiclesContext.Provider>
  );
};

export const useVehicles = () => useContext(VehiclesContext);
