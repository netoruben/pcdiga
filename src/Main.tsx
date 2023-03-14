import React, { createContext, useEffect, useState } from 'react';
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

export const DarkContext = createContext<{
  dark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}>({
  dark: false,
  setDark: () => {}
})

function Main() {
  const [dark, setDark] = useState(false);
  const [innerWidth, setWidth] = useState(window.innerWidth)
  const value = { dark, setDark };

  window.addEventListener(('resize'), () => {
    setWidth(window.innerWidth)
  })

  useEffect(() => {
    if (dark) {
      (document.getElementById('html') as HTMLElement).className = 'dark-background-secondary'
    } else {
      (document.getElementById('html') as HTMLElement).className = ''
    }
  }, [dark])

  return (
    <>
    <DarkContext.Provider value={value}>
      {innerWidth <= 900 ? <HeaderMobile/> : <Header/>}
      {innerWidth <= 500 ? <BannerMobile/> : <Banner/>}
      <main className='main'>
        {innerWidth <= 550 ? <ProductsMobile/> : <Products/>}
        <Carousel title='Em destaque' type='destaque'/>
        <Carousel title='Promoções' type='promocao'/>
        {innerWidth <= 550 ? <Carousel title='No Blog' type='blog'/> : <News/>}
      </main>
      {innerWidth <= 800 ? <FooterMobile/> : <Footer/>}
    </DarkContext.Provider>
    </>
  );
}

export default Main;
