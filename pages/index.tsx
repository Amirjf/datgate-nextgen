import {
  DealerIntro,
  Hero,
  AboutDealer,
  ModelSection,
  ReviewsSection,
} from '@/components/ui';
import { SiteContext } from 'contexts/site/SiteContext';
import MainLayout from 'layouts/main';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const Home = ({ siteData }: any) => {
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
      <SiteContext.Provider value={siteData}>
        <Hero />
        <ModelSection />
        <DealerIntro />
        <AboutDealer />
        <ReviewsSection />
      </SiteContext.Provider>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(
    'https://api2.dealertower.com/dealer/nissan.datgate.com/get-information'
  );
  const { data } = await response.json();

  return {
    props: {
      siteData: data,
    },
    revalidate: 60,
  };
};

Home.PageLayout = MainLayout;

export default Home;
