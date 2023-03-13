import React, {FunctionComponent} from 'react';
import './categorie.css';

type Props = {
    image: string
    name: string,
    selected: boolean
}

const Categorie: FunctionComponent<Props> = ({selected, image, name}) => {
  return (
    <div className='categorie'>
      <img alt={name} src={image}/>
      <button className={'categorie-name' + (selected ? ' categorie-name-selected' : '')}>{name}</button>
    </div>
  );
}

export default Categorie;