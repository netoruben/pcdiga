import React, {useState} from 'react';
import useBanner from '../../hooks/useBanner';
import './banner.css';

function Banner() {
    const banners = (document.getElementsByClassName('banner-item') as HTMLCollectionOf<HTMLImageElement>)
    let [bannerSelected, setBanner] = useState(0)

    const getPrev = () => {
        banners[bannerSelected].style.left = '-1400px'
        const lastBannerSelected = bannerSelected
        setTimeout(() => {
            banners[lastBannerSelected].style.visibility = 'hidden'
            if (bannerSelected === 0) {
                setBanner(banners.length - 1)
            } else {
                setBanner(bannerSelected -= 1)
            }
            banners[lastBannerSelected].style.removeProperty('visibility')
            banners[lastBannerSelected].style.removeProperty('left')
            return
        }, 500)
    }

    const getProx = () => {
        banners[bannerSelected].style.left = '-1400px'
        const lastBannerSelected = bannerSelected
        setTimeout(() => {
            banners[lastBannerSelected].style.visibility = 'hidden'
            if (bannerSelected === banners.length - 1) {
                setBanner(0)
            } else {
                setBanner(bannerSelected += 1)
            }
            banners[lastBannerSelected].style.removeProperty('visibility')
            banners[lastBannerSelected].style.removeProperty('left')
            return
        }, 500)
    }

    const {mouseDown, mouseUp, mouseMove} = useBanner(getPrev, getProx)

  return (
    <section className='banner'>
        <img className={"banner-item" + (bannerSelected === 0 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop.png'/>
        <img className={"banner-item" + (bannerSelected === 1 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop.png'/>
        <img className={"banner-item" + (bannerSelected === 2 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop.png'/>
        <div className='banner-controls'>
            <button onClick={getPrev} className='banner-control banner-control-left'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <path d="M10 1L2 9L10 17" stroke="white" strokeWidth="2"/>
                </svg>
            </button>
            <button onClick={getProx} className='banner-control banner-control-right'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="18" viewBox="0 0 11 18" fill="none">
                    <path d="M1 17L9 9L1 0.999999" stroke="white" strokeWidth="2"/>
                </svg>
            </button>
        </div>
        <div onMouseDown={(ev) => mouseDown(ev)} onMouseUp={(ev) => mouseUp(ev)} onTouchEnd={(ev) => mouseUp(ev)} onTouchMove={(ev) => mouseMove(ev)} onTouchStart={(ev) => mouseDown(ev)} className='banner-draggable'>
        </div>
    </section>
  );
}

export default Banner;