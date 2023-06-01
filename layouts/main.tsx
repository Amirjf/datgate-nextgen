import Footer from 'components/layout/Footer';
import React from 'react';
import { Header } from '../components';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header bg="backdrop-blur-md bg-gray-400/30" />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
