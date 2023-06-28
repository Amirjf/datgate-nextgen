import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchInventoryData = async () => {
  const { data } = await axios.post(
    'https://api2.dealertower.com/inventory/nissan.datgate.com',
    {
      page: 1,
    }
  );
  return data.data;
};

export const useInventoryData = () => {
  return useQuery(['inventory', fetchInventoryData]);
};
