import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const fetchInventory = async (
  queryClient: QueryClient,
  context: any
) => {
  return await queryClient.prefetchInfiniteQuery(
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
};
