import React, {useEffect, useState} from 'react';
import Product from '../common/product/product';
import ProductsData from '../../data/products';
import './products.css';
import Categories from '../categories/categories';

function Products() {
  const [selectedCategorie, setCategorie] = useState('Todos')
  const [products, setProducts] = useState<JSX.Element[]>([])

  useEffect(() => {
    setProducts([])
    const currentProducts: JSX.Element[] = []
    ProductsData.forEach((product) => {
      if (!product.type && product.categorie === selectedCategorie) {
        currentProducts.push(<Product image={product.image} name={product.name} colorsData={product.colors}/>)
      }
      if (!product.type && selectedCategorie === 'Todos') {
        currentProducts.push(<Product image={product.image} name={product.name} colorsData={product.colors}/>)
      }
    })
    setProducts(currentProducts)
  }, [selectedCategorie])

  return (
    <>
      <Categories selectedCategorie={selectedCategorie} setCategorie={setCategorie}/>
      <section className='products'>
        {products}
      </section>
    </>
  );
}

export default Products;
