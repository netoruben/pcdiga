import React from 'react';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import Categories from './components/categories/categories';
import './Main.css';
import Products from './components/products/products';
import Carousel from './components/carousel/carousel';
import News from './components/news/news';

function Main() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Banner/>
        <Categories/>
        <Products/>
        <Carousel title='Em destaque' type='destaque'/>
        <Carousel title='Promoções' type='promocao'/>
        <News/>
      </main>
    </>
  );
}

export default Main;
