import { QueryClient, dehydrate } from '@tanstack/react-query';
import axios from 'axios';
import { VehiclesList } from 'components/VehiclesList/VehiclesList';
import ShopSidebar from 'components/shop-sidebar/ShopSidebar';
import { InventoryContext } from 'contexts/shop/InventoryContext';
import ShopLayout from 'layouts/shop';
import React, { useContext } from 'react';

const DynamicFilteringInventory = ({ filterData }: any) => {
  console.log(filterData, 'filterData');
  const { addFilter, setQuery }: any = useContext(InventoryContext);

  React.useEffect(() => {
    filterData?.selected_filters.map((filter: any) => {
      if (filter.type === 'number') {
        setQuery((prev: any) => {
          return { ...prev, [filter.name]: filter.value };
        });
        // setNumberFilters((prev: any) => ({
        //   ...prev,
        //   [`${filter.name}.min`]: filter.value.min,
        //   [`${filter.name}.max`]: filter.value.max,
        // }));
      } else {
        addFilter({
          key: filter.name,
          value: filter.value,
        });
      }
    });
  }, [filterData]);

  return (
    <div className="flex">
      <ShopSidebar />
      <VehiclesList />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();

  console.log(context.resolvedUrl, 'context');

  const res = await queryClient.prefetchInfiniteQuery(
    ['vehicles', {}],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.post(
        'https://api2.dealertower.com/inventory/nissanofportland.com',
        {
          page: pageParam,
          condition: ['new', 'used', 'certified'],
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
