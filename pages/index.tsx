import type { NextPage } from 'next';
import { Hero, Layout } from '@/components/ui';

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <div className="h-[4040px]"></div>
      </>
    </Layout>
  );
};

export default Home;
