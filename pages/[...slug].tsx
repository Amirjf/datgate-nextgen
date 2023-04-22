import { QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { InventoryContext } from 'contexts/shop/InventoryContext';
import ShopLayout from 'layouts/shop';
import React, { useContext } from 'react';

const DynamicFilteringInventory = ({ filterData }: any) => {
  const { addFilter }: any = useContext(InventoryContext);

  React.useEffect(() => {
    console.log('fire');
    filterData?.selected_filters.map((filter: any) => {
      addFilter({
        key: filter.name,
        value: filter.value,
      });
    });
  }, [filterData]);

  return (
    <>
      <ShopSidebar />
      <VehiclesList />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery(
    ['vehicles', {}],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.post(
        'https://api2.dealertower.com/inventory/nissanofportland.com',
        {
          page: pageParam,
          url_filtering: context.resolvedUrl,
        }
      );
      return data.data;
    }
  );

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      filterData: JSON.parse(JSON.stringify(dehydrate(queryClient))).queries[0]
        .state.data.pages[0],
    },
  };
};

DynamicFilteringInventory.PageLayout = ShopLayout;

export default DynamicFilteringInventory;
