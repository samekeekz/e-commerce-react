import { useContext, useMemo, useState } from 'react';
import Header from '../sections/Header';
import Sales from '../components/Products';
import Sidebar from '../sections/Sidebar';
import { products } from '../constants';
import { useSortedProducts } from '../hooks/useProducts';
import { Context } from '../components/context/Context';
import ContentMenu from '../components/ContentMenu';
import Carousel from '../components/Carousel';
import Products from '../components/Products';
import SearchInput from '../components/UI/SearchInput';

const Home = () => {
  const { filter, setFilter, sortedProducts } = useContext(Context);
  return (
    <div className="container">
      <div className="flex justify-between">
        <ContentMenu />
        <Carousel />
      </div>
      <Products products={products} />
      {/* <div className="mt-8 grid-container">
          <Sidebar />
          <div className="pl-10 relative">
            <SearchInput />
            <Products products={sortedProducts} />
          </div>
        </div> */}
    </div>
  );
};

export default Home;
