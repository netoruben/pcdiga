import React, {useState} from 'react';
import './banner-mobile.css';

function BannerMobile() {
    const banners = (document.getElementsByClassName('banner-item') as HTMLCollectionOf<HTMLImageElement>)
    let [bannerSelected, setBanner] = useState(0)
    const [curX, setCurX] = useState(0)
    const [mX, setMX] = useState(0)

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

    const mouseDown = (ev: React.TouchEvent<HTMLDivElement>) => {
        if (ev.touches.length === 1)
            setMX(ev.touches[0].pageX)
    }

    const mouseMove = (ev: React.TouchEvent<HTMLDivElement>) => {
        if (ev.touches.length === 1) {
            setCurX(ev.touches[0].pageX)
        }
    }
   
    const mouseUp = (ev: React.TouchEvent<HTMLDivElement>) => {
        if (curX > mX){
            getProx()
        } else {
            getPrev()
        }
    }


  return (
    <section className='banner banner-mobile'>
        <img className={"banner-item" + (bannerSelected === 0 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop-mobile.png'/>
        <img className={"banner-item" + (bannerSelected === 1 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop-mobile.png'/>
        <img className={"banner-item" + (bannerSelected === 2 ? ' banner-current' : '')} alt='pcdiga-apple-black-weeks-geral-banner-desktop' src='/images/pcdiga-apple-black-weeks-geral-banner-desktop-mobile.png'/>
        <div onTouchEnd={(ev) => mouseUp(ev)} onTouchMove={(ev) => mouseMove(ev)} onTouchStart={(ev) => mouseDown(ev)} className='banner-draggable'/>
    </section>
  );
}

export default BannerMobile;