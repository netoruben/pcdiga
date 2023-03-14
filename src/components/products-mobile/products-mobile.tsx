import React, {useEffect, useState} from 'react';
import Product from '../common/product/product';
import ProductsData from '../../data/categories-mobile';
import Categories from '../categories/categories';

function ProductsMobile() {
  const [selectedCategorie, setCategorie] = useState('Todos')
  const [products, setProducts] = useState<JSX.Element[]>([])

  useEffect(() => {
    setProducts([])
    const currentProducts: JSX.Element[] = []
    ProductsData.forEach((product) => {
      if (product.categorie === selectedCategorie) {
        currentProducts.push(<Product from={product.fromPrice} image={product.image} name={product.name}/>)
      }
      if (selectedCategorie === 'Todos') {
        currentProducts.push(<Product from={product.fromPrice} image={product.image} name={product.name}/>)
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

export default ProductsMobile;
