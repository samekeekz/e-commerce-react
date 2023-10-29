import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
