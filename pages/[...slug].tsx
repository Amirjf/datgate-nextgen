import { QueryClient, dehydrate } from '@tanstack/react-query';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { InventoryContext } from 'contexts/shop/InventoryContext';
import { useVehicles } from 'contexts/shop/VehiclesContext';
import ShopLayout from 'layouts/shop';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const { addFilter }: any = useContext(InventoryContext);
  const { data }: any = useVehicles();
  React.useEffect(() => {
    filterData?.selected_filters.map((filter: any) => {
      addFilter({
        key: filter.name,
        value: filter.value,
      });
    });
  }, [filterData]);

  // const handle = () => {
  //   console.log(router.query, 'router.query');
  //   router.query = { make: ['Nissan', 'Ford'] };
  // };

  // const getOtherQueries = data?.selectedFilters.filter(
  //   (filter) => filter.name !== 'condition'
  // );
  // const getCond = data?.selectedFilters.find(
  //   (filter) => filter.name === 'condition'
  // )?.value;

  // console.log(
  //   convertArrayToObject(getOtherQueries),
  //   'convertArrayToObject(getOtherQueries)'
  // );

  // const objFilters = convertArrayToObject(getOtherQueries);
  return (
    <>
      <ShopSidebar />
      {/* <Link
        href={{
          pathname: `/${getCond}-vehicles/${
            objFilters?.make && objFilters?.make[0]
          }/${objFilters?.model ? objFilters?.model[0] : ''}/`,
          query: objFilters,
        }}
      >
        CLICk
      </Link> */}
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
