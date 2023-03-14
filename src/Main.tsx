import React, { useState } from 'react';
import Banner from './components/banner/banner';
import Header from './components/header/header';
import './Main.css';
import Products from './components/products/products';
import Carousel from './components/carousel/carousel';
import News from './components/news/news';
import Footer from './components/footer/footer';
import HeaderMobile from './components/header-mobile/header-mobile';
import BannerMobile from './components/banner-mobile/banner-mobile';
import ProductsMobile from './components/products-mobile/products-mobile';
import FooterMobile from './components/footer-mobile/footer-mobile';

function Main() {
  const [innerWidth, setWidth] = useState(window.innerWidth)

  window.addEventListener(('resize'), () => {
    setWidth(window.innerWidth)
  })

  return (
    <>
      {innerWidth <= 900 ? <HeaderMobile/> : <Header/>}
      {innerWidth <= 500 ? <BannerMobile/> : <Banner/>}
      <main className='main'>
        {innerWidth <= 550 ? <ProductsMobile/> : <Products/>}
        <Carousel title='Em destaque' type='destaque'/>
        <Carousel title='Promoções' type='promocao'/>
        {innerWidth <= 550 ? <Carousel title='No Blog' type='blog'/> : <News/>}
      </main>
      {innerWidth <= 800 ? <FooterMobile/> : <Footer/>}
    </>
  );
}

export default Main;
