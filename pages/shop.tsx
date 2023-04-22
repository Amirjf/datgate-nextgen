import { dehydrate, QueryClient } from '@tanstack/react-query';
import ShopLayout from 'layouts/shop';
import React from 'react';
import axios from 'axios';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import Head from 'next/head';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import { useVehicles } from 'contexts/shop/VehiclesContext';

const Shop = () => {
  <Head>
    <title>Inventory</title>
    <meta name="description">Nissan of Portland Inventory</meta>
  </Head>;

  const { data, fetchNextPage, hasNextPage }: any = useVehicles();

  const loadMoreButtonRef = React.useRef(null);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <div className="flex">
      <ShopSidebar />
      <VehiclesList />
    </div>
  );
};

export const getServerSideProps = async () => {
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

Shop.PageLayout = ShopLayout;

export default Shop;
