import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import useInfiniteVehicles from 'hooks/useInfiniteVehicles';
import ShopLayout from 'layouts/shop';
import React from 'react';
import axios from 'axios';
const shop = () => {
  const { data, error, isFetching, isLoading, isInitialLoading } =
    useInfiniteVehicles();

  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {data?.pages.map((cars: any, page: number) => {
          return cars.rows_data.map((car: any) => {
            return (
              <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                <p className="text-2xl text-gray-100 dark:text-gray-500">
                  {car.title_short}
                </p>
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(['vehicles'], getInventory);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}

export async function getInventory() {
  const response = await axios.post(
    'https://slx3e4lxz2.execute-api.us-west-2.amazonaws.com/inventory/nissanofportland.com',
    { page: 1, items_per_page: 20 }
  );
  return response.data.data;
}

shop.PageLayout = ShopLayout;

export default shop;
