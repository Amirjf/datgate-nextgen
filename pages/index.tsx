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

Home.PageLayout = MainLayout;

export default Home;
