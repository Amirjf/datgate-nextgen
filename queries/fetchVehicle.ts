import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const fetchVehicle = async (vin: string, queryClient: QueryClient) => {
  return await queryClient.prefetchQuery(['vehicle', vin], async () => {
    const { data } = await axios.get(
      `https://api2.dealertower.com/inventory/nissan.datgate.com/get-vehicle`,
      { params: { vdp_url: vin } }
    );
    return data.data;
  });
};
