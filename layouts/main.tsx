import Footer from 'components/layout/Footer';
import React from 'react';
import { Header } from '../components';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
