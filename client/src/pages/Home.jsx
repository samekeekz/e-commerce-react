import { useContext, useMemo, useState } from 'react';
import Header from '../sections/Header';
import Sales from '../sections/Sales';
import Sidebar from '../sections/Sidebar';
import { products } from '../constants';
import { useSortedProducts } from '../hooks/useProducts';
import { Context } from '../components/context/context';
import ContentMenu from '../components/ContentMenu';
import Carousel from '../components/Carousel';

const Home = () => {
  const [filter, setFilter] = useState({
    category: [],
    priceMin: 0,
    priceMax: 1500,
  });
  const sortedProducts = useSortedProducts(products, filter);

  console.log(filter);
  return (
    <Context.Provider value={{ filter, setFilter }}>
      <div className="container">
        <div className="flex justify-between">
          <ContentMenu />
          <Carousel />
        </div>
        {/* <Sales products={sortedProducts} /> */}
        <div className="mt-8 grid-container">
          <Sidebar />
          <div className="pl-10">
            <Sales products={sortedProducts} />
          </div>
        </div>
      </div>
    </Context.Provider>
  );
};

export default Home;
