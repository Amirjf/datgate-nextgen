import { dehydrate, QueryClient } from '@tanstack/react-query';
import useInfiniteVehicles from 'hooks/useInfiniteVehicles';
import ShopLayout from 'layouts/shop';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
const Shop = () => {
  const { data } = useInfiniteVehicles();

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {data?.pages.map((cars: any, page: number) => {
          return cars.rows_data.map((car: any) => {
            return (
              <div key={car.id} className="flex flex-col">
                <span>
                  <Image
                    src={car.photo || '/no-photo.jpg'}
                    width={600}
                    height={300}
                    alt={car.title_short}
                    loading="eager"
                    priority
                    sizes="(max-width: 768px) 20vw,
                        (max-width: 1200px) 50vw,
                        53vw"
                  />
                </span>
                <h2 className="text-lg text-gray-100 dark:text-gray-500">
                  {car.title_short}
                </h2>
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

export async function getInventory(filters = {}) {
  const response = await axios.post(
    'https://slx3e4lxz2.execute-api.us-west-2.amazonaws.com/inventory/nissanofportland.com',
    { page: 1, items_per_page: 20, ...filters }
  );
  return response.data.data;
}

Shop.PageLayout = ShopLayout;

export default Shop;
