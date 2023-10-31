import { createContext, useState } from 'react';
import { useSortedProducts } from '../../hooks/useProducts';
import { products } from '../../constants';

export const Context = createContext(null);

export const ContextProvider = props => {
  const [filter, setFilter] = useState({
    category: [],
    priceMin: 0,
    priceMax: 1500,
  });

  const sortedProducts = useSortedProducts(products, filter);

  console.log(filter);
  const value = {
    filter,
    setFilter,
    sortedProducts,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
