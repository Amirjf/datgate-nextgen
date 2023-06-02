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

Home.PageLayout = MainLayout;

export default Home;
