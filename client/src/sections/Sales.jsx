import Card from '../components/Card';

const Sales = ({ products }) => {
  return (
    <div className="mt-10 flex items-start flex-wrap gap-5 transition-all">
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
