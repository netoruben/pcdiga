import React, {FunctionComponent} from 'react';
import './product.css';

type Props = {
    image: string
    name: string
    type?: 'promocao' | 'destaque'
    colorsData?: {hex: string}[]
}

const Product: FunctionComponent<Props> = ({colorsData, image, name, type}) => {

    const colors: JSX.Element[] = []

    if (colorsData) {
        colorsData.forEach((color) => {
            colors.push(<div className='product-color' style={{backgroundColor: color.hex}}></div>)
        })
    }

    const renderElement = () => {
        if (type) {
            return <div className='product'>
                    <a href="#" className='product-name'>{name}</a>
                    <div className='product-colors'>
                        {colors}
                    </div>
                    <img alt={name} src={image}/>
                </div>
        }
        return <div className='product'>
                    <a href="#" className='product-name'>{name}</a>
                    <div className='product-colors'>
                        {colors}
                    </div>
                    <img alt={name} src={image}/>
                </div>
    }

  return (
    renderElement()
  );
}

export default Product;