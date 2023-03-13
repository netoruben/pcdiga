import React from 'react';
import Product from '../common/product/product';
import ProductsData from '../../data/products';
import './products.css';

function Products() {

  const products: JSX.Element[] = []

  ProductsData.forEach((product) => {
    if (!product.type)
      products.push(<Product image={product.image} name={product.name} colorsData={product.colors}/>)
  })

  return (
    <section className='products'>
      {products}
    </section>
  );
}

export default Products;
