import { QueryClient, dehydrate } from '@tanstack/react-query';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { InventoryContext } from 'contexts/shop/InventoryContext';
import ShopLayout from 'layouts/shop';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { fetchInventory } from 'queries/fetchInventory';
import React, { useContext } from 'react';

export const convertArrayToObject = (array: any) => {
  return array.reduce((acc: any, item: any) => {
    if (!acc[item.name]) {
      acc[item.name] = [];
    }

    if (item.type === 'number') {
      acc[item.name].push(item.value.min);
      acc[item.name].push(item.value.max);
    }

    if (item.type === 'select') {
      acc[item.name].push(item.value);
    }

    return acc;
  }, {});
};

const Inventory = ({ filterData }: any) => {
  const { addFilter }: any = useContext(InventoryContext);
  React.useEffect(() => {
    filterData?.selected_filters.map((filter: any) => {
      addFilter({
        key: filter.name,
        value: filter.value,
      });
    });
  }, [filterData]);

  return (
    <>
      <Head>
        <title>Inventory</title>
        <meta property="description" name="description" content="Inventory" />
      </Head>
      <ShopSidebar />
      <VehiclesList />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  await fetchInventory(queryClient, context);
  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      filterData: JSON.parse(JSON.stringify(dehydrate(queryClient))).queries[0]
        .state.data.pages[0],
    },
  };
};

Inventory.PageLayout = ShopLayout;

export default Inventory;
