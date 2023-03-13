import React, {FunctionComponent} from 'react';
import ButtonDefault from '../button-default/button-default';
import './product-card.css';

type Props = {
    image: string
    name: string
    desc: string
    reference: string
    stock: {
        predict: string
    }
    price: number
    discount?: number
    type: 'promocao' | 'destaque'
}

const ProductCard: FunctionComponent<Props> = ({image, name, desc, reference, stock, price, discount, type}) => {

    let promotion: boolean = false

    if (type === 'promocao')
        promotion = true

  return (
    <div className='product-card'>
        {promotion && <div className='product-card-discount'>
            <p>-{discount!}€</p>
        </div>}
        <div className='product-card-image'>
            <img alt={name} src={image}/>
        </div>
        <a href="#" className='product-card-name'>{name}</a>
        <p className='product-card-desc'>{desc}</p>
        <p className='product-card-ref'>{reference}</p>
        {stock && <p className='product-card-stock'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                <path d="M6.83707 12.6359C3.3582 12.6321 0.538977 9.83593 0.535156 6.38556V6.26056C0.604434 2.82572 3.45583 0.0902357 6.91941 0.135815C10.383 0.181395 13.1602 2.99095 13.1376 6.4264C13.1149 9.86184 10.301 12.6352 6.83707 12.6359ZM3.94449 6.1293L3.05592 7.01059L5.57668 9.51071L10.6182 4.51047L9.72964 3.62293L5.57668 7.74188L3.94449 6.1293Z" fill="#52A35A"/>
            </svg>
            Em Stock<br/>
            <span>Entrega prevista a partir de {stock.predict}</span></p>}
        <div className='product-card-price'>
            <p>{promotion ? (price - discount!).toFixed(2).replace('.', ',') : price.toFixed(2).replace('.', ',')} €</p>
            {promotion && <div className='product-card-pvpr'>
                <p>PVPR<br/>
                <span>{price.toFixed(2).replace('.', ',')}€</span>
                </p>
            </div>}
        </div>
        <div className='product-card-btns'>
            <ButtonDefault>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M7.97938 13.3036C7.51158 12.8863 6.98285 12.4523 6.42366 11.9906H6.4164C4.44727 10.3712 2.21558 8.53888 1.22992 6.34327C0.906099 5.64426 0.734487 4.88375 0.726571 4.11264C0.724408 3.05458 1.14635 2.0403 1.89704 1.29903C2.64773 0.557757 3.66381 0.152076 4.71562 0.173672C5.57191 0.175032 6.40976 0.423928 7.12935 0.89071C7.44555 1.09712 7.73164 1.34679 7.97938 1.63255C8.22851 1.34792 8.51467 1.09839 8.83014 0.89071C9.54942 0.423836 10.3871 0.174925 11.2431 0.173672C12.295 0.152076 13.311 0.557757 14.0617 1.29903C14.8124 2.0403 15.2344 3.05458 15.2322 4.11264C15.2248 4.88498 15.0532 5.64679 14.7288 6.34691C13.7432 8.54252 11.5122 10.3741 9.54309 11.9906L9.53583 11.9964C8.97592 12.4552 8.44791 12.8892 7.98011 13.3094L7.97938 13.3036ZM4.71562 1.63255C4.04003 1.62405 3.38841 1.88409 2.90242 2.35615C2.43417 2.81874 2.17246 3.45253 2.17708 4.11264C2.18535 4.67467 2.31192 5.22857 2.54848 5.73783C3.01376 6.68516 3.64156 7.5425 4.40303 8.27044C5.12178 8.99988 5.9486 9.70598 6.66372 10.2997C6.86173 10.4639 7.06335 10.6294 7.26498 10.795L7.3919 10.8993C7.58556 11.0584 7.78573 11.2232 7.97938 11.3851L7.98881 11.3764L7.99316 11.3727H7.99751L8.00404 11.3676H8.00767H8.01129L8.02435 11.3567L8.05409 11.3326L8.05916 11.3283L8.06714 11.3224H8.07149L8.07802 11.3166L8.55961 10.919L8.68581 10.8147C8.88961 10.6477 9.09124 10.4821 9.28924 10.318C10.0044 9.72421 10.8319 9.01885 11.5507 8.28576C12.3122 7.55819 12.9401 6.70107 13.4052 5.75388C13.6461 5.24021 13.7744 4.68051 13.7817 4.11264C13.7846 3.45457 13.5231 2.82321 13.0563 2.36199C12.5713 1.88779 11.9196 1.62561 11.2431 1.63255C10.4177 1.62549 9.62862 1.97347 9.07456 2.58884L7.97938 3.85807L6.88421 2.58884C6.33014 1.97347 5.54105 1.62549 4.71562 1.63255Z" fill="black"/>
                </svg>&nbsp;Wishlist
            </ButtonDefault>
            <ButtonDefault>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path d="M5.82305 12.5739L2.19665 9.6561L5.82305 6.73834V8.92666H15.2517V10.3855H5.82305V12.5739ZM10.1747 6.73834V4.55003H0.746094V3.09115H10.1747V0.902832L13.8011 3.82059L10.1747 6.73834Z" fill="black"/>
                </svg>&nbsp;Comparar
            </ButtonDefault>
        </div>
    </div>
  );
}

export default ProductCard;