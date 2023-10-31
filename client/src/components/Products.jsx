import Card from './Card';

const Products = ({ products }) => {
  return (
    <div className="pt-14 flex items-start flex-wrap gap-5 transition-all">
      {products.map(product => (
        <Card
          imgURL={product.imgURL}
          name={product.name}
          prevPrice={product.prevPrice}
          newPrice={product.newPrice}
          starNumber={product.starNumber}
          reviewNumber={product.reviewNumber}
          key={product.id}
          id={product.id}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Products;
