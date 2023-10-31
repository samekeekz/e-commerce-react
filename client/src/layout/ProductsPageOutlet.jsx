import { useContext } from 'react';
import Sidebar from '../sections/Sidebar';
import SearchInput from '../components/UI/SearchInput';
import Products from '../components/Products';
// import { products } from '../constants';
import { Context } from '../components/context/Context';

const ProductsPageOutlet = () => {
  const { filter, setFilter, sortedProducts } = useContext(Context);

  return (
    // <div className="container">
    //   <h1>Products</h1>
    //   <Products products={products} />
    //   <Outlet />
    // </div>
    <div className="mt-8 grid-container container">
      <Sidebar />
      <div className="pl-10 relative">
        <SearchInput />
        <Products products={sortedProducts} />
      </div>
    </div>
  );
};

export default ProductsPageOutlet;
