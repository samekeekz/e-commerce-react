import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../sections/Sidebar';
import SearchInput from '../components/UI/SearchInput';
import Products from '../components/Products';
import { Context } from '../components/context/Context';
import { useSortedProducts } from '../hooks/useProducts';
import { products } from '../constants';

const CategoryPage = () => {
  const { category } = useParams();
  const { filter, setFilter, sortedProducts } = useContext(Context);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const pros = products.filter(item => item.category === category);
    setPosts(pros);
  }, [category]);

  function findMinAndMaxPrices(products) {
    if (products.length === 0) {
      return { minPrice: 0, maxPrice: 0 };
    }

    let minPrice = products[0].newPrice;
    let maxPrice = products[0].newPrice;

    for (let i = 1; i < products.length; i++) {
      const price = products[i].newPrice;

      if (price < minPrice) {
        minPrice = price;
      }

      if (price > maxPrice) {
        maxPrice = price;
      }
    }

    return { minPrice, maxPrice };
  }

  return (
    <div className="mt-8 grid-container container">
      <Sidebar />
      <div className="pl-10 relative">
        <SearchInput />
        <Products products={posts} />
      </div>
    </div>
  );
};

export default CategoryPage;
