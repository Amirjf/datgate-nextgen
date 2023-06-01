import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const fetchInventory = async (queryClient: QueryClient, url: any) => {
  return await queryClient.prefetchInfiniteQuery(
    ['vehicles', {}],
    async ({ pageParam = 1 }) => {
      const { data } = await axios.post(
        'https://api2.dealertower.com/inventory/nissan.datgate.com',
        {
          page: pageParam,
          url_filtering: url,
        }
      );
      return data.data;
    }
  );
};
