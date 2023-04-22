import { QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import ShopLayout from 'layouts/shop';
import React from 'react';

const UsedVehiclesPage = () => {
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
          condition: ['used', 'certified'],
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

UsedVehiclesPage.PageLayout = ShopLayout;

export default UsedVehiclesPage;
