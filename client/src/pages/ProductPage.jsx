import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../constants';

const ProductPage = () => {
  const { id } = useParams();

  const product = products.find(item => item.id === parseInt(id));
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imgURL} alt="" />
    </div>
  );
};

export default ProductPage;
