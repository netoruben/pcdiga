import React, {FunctionComponent} from 'react';
import './product.css';

type Props = {
    image: string
    name: string
    from?: number
    colorsData?: {hex: string}[]
}

const Product: FunctionComponent<Props> = ({colorsData, image, name, from}) => {

    const colors: JSX.Element[] = []

    if (colorsData) {
        colorsData.forEach((color) => {
            colors.push(<div className='product-color' style={{backgroundColor: color.hex}}></div>)
        })
    }

  return (
    <div className={'product' + (from ? ' product-mobile' : '')}>
        <div className={(from ? 'product-mobile-padding' : '')}>
            <a href="#" className='product-name'>
                {name.includes('Apple') ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                <path d="M23.9625 10.227C23.7861 10.362 20.6726 12.093 20.6726 15.942C20.6726 20.394 24.6345 21.969 24.753 22.008C24.7348 22.104 24.1236 24.165 22.6642 26.265C21.3628 28.113 20.0037 29.958 17.9361 29.958C15.8686 29.958 15.3365 28.773 12.9497 28.773C10.6236 28.773 9.79662 29.997 7.90541 29.997C6.01419 29.997 4.69459 28.287 3.17736 26.187C1.41993 23.721 0 19.89 0 16.254C0 10.422 3.84324 7.329 7.62568 7.329C9.63547 7.329 11.3108 8.631 12.5726 8.631C13.7736 8.631 15.6466 7.251 17.9331 7.251C18.7997 7.251 21.9132 7.329 23.9625 10.227ZM16.8476 4.782C17.7932 3.675 18.4622 2.139 18.4622 0.603C18.4622 0.39 18.4439 0.174 18.4044 0C16.8659 0.057 15.0355 1.011 13.9318 2.274C13.0652 3.246 12.2564 4.782 12.2564 6.339C12.2564 6.573 12.2959 6.807 12.3142 6.882C12.4115 6.9 12.5696 6.921 12.7277 6.921C14.1081 6.921 15.8443 6.009 16.8476 4.782Z" fill="black"/>
                </svg> : ''}
                {name.replace('Apple', '')}</a>
            {from && <div className='product-info'>
                <p className='product-info-from'>Desde {from}€</p>
                <a className='product-info-more'>Ver todos</a>
            </div>}
            <div className='product-colors'>
                {colors}
            </div>
        </div>
        <img alt={name} src={image}/>
    </div>
  );
}

export default Product;