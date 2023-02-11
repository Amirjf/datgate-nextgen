import { useInfiniteQuery } from '@tanstack/react-query';
import { InventoryContext } from 'contexts/shop/InventoryContext';
import { getInventory } from 'pages/shop';
import { useContext } from 'react';

const useInfiniteVehicles = () => {
  const { filters }: any = useContext(InventoryContext);

  const placeholderData: any = {
    pages: [
      {
        available_filters: {
          body_style: [],
          drive_train: [],
          exterior_color_group: [],
          fuel_type: [],
          make: [],
          model: [],
          year: [],
        },
        rows_data: [],
      },
    ],
  };

  //   const fetchCars = async ({ pageParam = 1 }) => {
  //     const res = await fetch(
  //       'https://slx3e4lxz2.execute-api.us-west-2.amazonaws.com/inventory',
  //       {
  //         method: 'POST',
  //         body: {
  //           ...filters,
  //           page: pageParam,
  //           items_per_page: 20,
  //         },
  //       }
  //     );

  //     const data = res.json();

  //     return data.data;
  //   };
  //   async function getInventory() {
  //     const response = await fetch(
  //       'https://slx3e4lxz2.execute-api.us-west-2.amazonaws.com/inventory/nissanofportland.com',
  //       {
  //         method: 'POST',
  //         mode: 'cors', // no-cors, *cors, same-origin
  //         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //         credentials: 'same-origin', // include, *same-origin, omit
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // 'Content-Type': 'application/x-www-form-urlencoded',
  //         },
  //         redirect: 'follow', // manual, *follow, error
  //         referrerPolicy: 'no-referrer', //
  //         body: JSON.stringify({ page: 1, items_per_page: 20, ...filters }),
  //       }
  //     );
  //     return response.json();
  //   }

  const {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    isLoading,
    isInitialLoading,
    fetchStatus,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['vehicles'],
    queryFn: getInventory,
    staleTime: 10000,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length === lastPage.payload.last_page) {
        return false;
      }
      return lastPage.payload.page + 1;
    },
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    refetchOnMount: false,
  });

  const filterItems = data?.pages[0].available_filters;
  return {
    data,
    filterItems,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
    isInitialLoading,
    isLoading,
  };
};

export default useInfiniteVehicles;
