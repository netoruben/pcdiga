import React from 'react';
import './banner.css';

function Banner() {
  return (
    <section className='banner'>
        <img alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop.png'/>
        <div className='banner-controls'>
            <button className='banner-control banner-control-left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2"/>
                </svg>
            </button>
            <button className='banner-control banner-control-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <path d="M1 17L9 9L1 0.999999" stroke="white" stroke-width="2"/>
                </svg>
            </button>
        </div>
    </section>
  );
}

export default Banner;