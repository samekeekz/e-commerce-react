import Card from '../components/Card';

import { products } from '../constants';
const Sales = () => {
  return (
    <div className="mt-10 flex justify-between items-start flex-wrap gap-5">
      {products.map(product => (
        <Card
          imgURL={product.imgURL}
          name={product.name}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          starNumber={product.starNumber}
          reviewNumber={product.reviewNumber}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Sales;
