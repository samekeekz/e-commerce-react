import { useMemo, useState } from 'react';
import Header from '../sections/Header';
import Sales from '../sections/Sales';
import Sidebar from '../sections/Sidebar';
import { products } from '../constants';

const Home = () => {
  const [filter, setFilter] = useState({ category: 'All', price: '100000' });

  const sortedProducts = useMemo(() => {
    return products.filter(product => {
      const isCategoryMatch =
        filter.category === 'All' || product.category === filter.category;
      const isPriceMatch =
        filter.price === '100000' ||
        product.newPrice < parseFloat(filter.price);
      return isCategoryMatch && isPriceMatch;
    });
  }, [filter]);

  console.log(sortedProducts);
  console.log(filter);
  return (
    <div className="container">
      <Header />
      {/* <Sales products={sortedProducts} /> */}
      <div className="mt-8 grid-container">
        <Sidebar filter={filter} setFilter={setFilter} />
        <div className="pl-10">
          <Sales products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};

export default Home;
