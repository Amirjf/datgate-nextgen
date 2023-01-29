import type { NextPage } from 'next';
import { Hero, Layout } from '@/components/ui';
import Head from 'next/head';
import ModelItem from 'components/model-item/ModelItem';

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
        <div className="h-[4040px]">sadasdsa</div>
      </>
    </Layout>
  );
};

export default Home;
