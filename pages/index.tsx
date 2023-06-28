import {
  DealerIntro,
  Hero,
  AboutDealer,
  ModelSection,
  ReviewsSection,
} from '@/components/ui';
import MainLayout from 'layouts/main';

import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Nissan of Datgate</title>
        <meta name="title" content="Nissan of Datgate" />
        <meta
          name="description"
          content="Nissan of Datgate | Car Dealership Website"
        />
      </Head>

      <Hero />
      <ModelSection />
      <DealerIntro />
      <AboutDealer />
      <ReviewsSection />
    </>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const data = await siteDataFetcher();

//   return {
//     props: {
//       siteData: data,
//     },
//     revalidate: 60,
//   };
// };

Home.PageLayout = MainLayout;

export default Home;
