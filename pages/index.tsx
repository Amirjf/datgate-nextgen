import type { NextPage } from 'next';
import { Hero, Layout, ModelSection } from '@/components/ui';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
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
        <div className="h-[2110px]"></div>
      </>
    </Layout>
  );
};

export default Home;
