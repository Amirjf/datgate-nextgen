import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import ShopLayout from 'layouts/shop';
import React, { useContext } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { InventoryContext } from 'contexts/shop/InventoryContext';

export const fetchVehicles = async ({ page, query }: any) => {
  const { data } = await axios.post(
    'https://api2.dealertower.com/inventory/nissanofportland.com',
    {
      page: page + 1,
      condition: ['new', 'used', 'certified'],
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
      staleTime: Infinity,
      cacheTime: Infinity,
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
          ...data,
        };
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    }
  );
};

const Shop = () => {
  // if (isInitialLoading) {
  //   return Array.from(Array(4).keys()).map((_, index) => (
  //     <h2 key={index}>Loading ...</h2>
  //   ));
  // }

  const { query }: any = useContext(InventoryContext);

  const { data, fetchNextPage, hasNextPage }: any =
    useInfiniteQueryWithInitialData(['vehicles', query], fetchVehicles, query);

  const loadMoreButtonRef = React.useRef(null);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  // const { vehicles, filterItems } = data;

  return (
    <div className="flex">
      <ShopSidebar filters={data?.filterItems} />
      <div className="p-4 w-full">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* <TestContent initialVehicles={vehicles} /> */}
          {data?.vehicles.map((cars: any, page: number) => {
            return cars.map((car: any) => (
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
              <div
                key={index}
                ref={loadMoreButtonRef}
                className="flex min-h-[300px] bg-gray-200"
              ></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(
    ['vehicles', {}],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.post(
        'https://api2.dealertower.com/inventory/nissanofportland.com',
        {
          page: pageParam,
          sort_by: '',
          order: 'desc',
          search: '',
          url_filtering: '',
          vin_numbers: [],
          condition: [],
          is_special: [],
          dealer: [],
          years: [],
          make: [],
          model: [],
          body: [],
          fuel_type: [],
          ext_color: [],
          int_color: [],
          transmission: [],
          engine: [],
          drive_train: [],
          trim: [],
          doors: [],
          key_features: [],
          mileage: {},
          sale_price: {},
        }
      );
      return data.data;
    }
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export const getVehicles = async (page = 1) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const body = JSON.stringify({
    page: page,
    sort_by: '',
    order: 'desc',
    search: '',
    url_filtering: '',
    vin_numbers: [],
    condition: [],
    is_special: [],
    dealer: [],
    years: [],
    make: [],
    model: [],
    body: [],
    fuel_type: [],
    ext_color: [],
    int_color: [],
    transmission: [],
    engine: [],
    drive_train: [],
    trim: [],
    doors: [],
    key_features: [],
    mileage: {},
    sale_price: {},
  });

  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body,
    redirect: 'follow',
  };

  const data = await fetch(
    'https://api2.dealertower.com/inventory/nissanofportland.com',
    requestOptions
  ).then((response) => response.json());

  return data.data;
};

Shop.PageLayout = ShopLayout;

export default Shop;
