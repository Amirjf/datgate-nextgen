import { InfoLine, VehicleImageSlider } from '@/design';
import {
  QueryClient,
  dehydrate,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { BlurImage } from 'components/BlurImage';
// import { Slider } from 'components/slider';
import MainLayout from 'layouts/main';
import { VehicleDetailsSection } from 'libs/design/VehicleDetailsSection/VehicleDetailsSection';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchVehicle } from 'queries/fetchVehicle';
import React from 'react';

export const fetchVehicleInfo = async (vin: string) => {
  const { data } = await axios.get(
    `https://api2.dealertower.com/inventory/nissan.datgate.com/get-vehicle`,
    { params: { vdp_url: vin } }
  );
  return data.data;
};

const VehicleDetailsPage = () => {
  const { query }: any = useRouter();

  const { data } = useQuery(['vehicle', query.vin], () =>
    fetchVehicleInfo(query.vin)
  );

  const {
    photos,
    title_short,
    stock_number,
    vin_number,
    formatted_price,
    mileage,
    condition,
    dealer_name,
    dealer_state,
    dealer_city,
  } = data;

  const { year, make, model, vin, condition: queryCondition } = query;

  return (
    <>
      <Head>
        <title>{`${queryCondition} ${year} ${make} ${model} - ${dealer_name} at ${dealer_state}, ${dealer_city}`}</title>
        <meta
          property="description"
          name="description"
          content={`${queryCondition} ${year} ${make} ${model} - ${dealer_name} at ${dealer_state}, ${dealer_city}`}
        />
      </Head>
      <div className="bg-gray-100">
        <div className="container mx-auto max-w-screen-2xl px-4 xxl:px-0 py-10">
          <div className="grid w-full gap-x-4 grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 rounded">
              <VehicleImageSlider photos={photos} />
              <div className="mt-4">
                <VehicleDetailsSection />
              </div>
            </div>

            <div className="bg-white max-h-96 sticky top-4 rounded">
              <div className="p-4">
                <div className="flex justify-between items-center border-b-2 pb-2">
                  <h1 className="font-bold text-lg">{title_short}</h1>
                  <p className="font-bold text-lg">{formatted_price}</p>
                </div>

                <div className="flex flex-col gap-y-4 mt-4">
                  <InfoLine label="Mileage" value={`${mileage} mi`} />
                  <InfoLine label="VIN #" value={vin_number} />
                  <InfoLine label="Stock #" value={stock_number} />
                  <InfoLine
                    className={`condition-${condition} uppercase font-bold`}
                    label="Stock Type"
                    value={condition}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const queryClient = new QueryClient();
  await fetchVehicle(context.params.vin, queryClient);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

VehicleDetailsPage.PageLayout = MainLayout;

export default VehicleDetailsPage;
