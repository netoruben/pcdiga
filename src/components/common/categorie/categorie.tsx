import React, {FunctionComponent} from 'react';
import './categorie.css';

type Props = {
    image: string
    name: string,
    selected: boolean,
    setCategorie: React.Dispatch<React.SetStateAction<string>>
}

const Categorie: FunctionComponent<Props> = ({selected, image, name,setCategorie}) => {

  const handleClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setCategorie(ev.currentTarget.innerText)
  }

  return (
    <div className='categorie'>
      <img alt={name} src={image}/>
      <button onClick={(ev) => handleClick(ev)} className={'categorie-name' + (selected ? ' categorie-name-selected' : '')}>{name}</button>
    </div>
  );
}

export default Categorie;