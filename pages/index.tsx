import {
  DealerIntro,
  Hero,
  AboutDealer,
  ModelSection,
  ReviewsSection,
} from '@/components/ui';
import MainLayout from 'layouts/main';
import Head from 'next/head';
import { FC } from 'react';

type Props = { homepageData: any };

const Home = () => {
  return (
    <>
      <Head>
        <title>Mercedes-Benz of Datgate</title>
        <meta name="title" content="Mercedes-Benz of Datgate" />
        <meta
          name="description"
          content="Mercedes-Benz of Datgate | Car Dealership Website"
        />
      </Head>
      <Hero />

      <ModelSection />
      <DealerIntro />
      <AboutDealer />
      <ReviewsSection />
      {/* <div className="h-[2110px]"></div> */}
    </>
  );
};
// export async function getStaticProps() {
//   const response = await fetch(
//     'https://api2.dealertower.com/dealer/nissan.datgate.com/get-information'
//   );
//   const { data } = await response.json();

//   return {
//     props: {
//       homepageData: data,
//     },
//     revalidate: 60,
//   };
// }

Home.PageLayout = MainLayout;

export default Home;
