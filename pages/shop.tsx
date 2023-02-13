import { dehydrate, QueryClient } from '@tanstack/react-query';
import useInfiniteVehicles from 'hooks/useInfiniteVehicles';
import ShopLayout from 'layouts/shop';
import React from 'react';
import axios from 'axios';
import Image from 'next/image';
import { InfiniteLoader } from '@/components/ui';
import Link from 'next/link';

const Shop = () => {
  const { data, isInitialLoading, hasNextPage } = useInfiniteVehicles();

  if (isInitialLoading) {
    return Array.from(Array(4).keys()).map((_, index) => (
      <h2 key={index}>Loading ...</h2>
    ));
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {data?.pages.map((cars: any, page: number) => {
          return cars.rows_data.map((car: any) => (
            <div key={car.id} className="flex flex-col">
              <Link href={`/vehicle/${car.id}`}>
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
              </Link>
              <Link href={`/vehicle/${car.id}`} className="text-black">
                {car.title_short}
              </Link>
            </div>
          ));
        })}
        {hasNextPage &&
          Array.from(Array(4).keys()).map((_, index) => (
            <div className="flex min-h-[300px] bg-gray-200" key={index}></div>
          ))}
        <InfiniteLoader />
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
