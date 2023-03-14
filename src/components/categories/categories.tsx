import React, {useEffect, FunctionComponent, useRef, useState} from 'react';
import Categorie from '../common/categorie/categorie';
import CategoriesData from '../../data/categories';
import './categories.css';
import useCarousel from '../../hooks/useCarousel';

type Props = {
  selectedCategorie: string
  setCategorie: React.Dispatch<React.SetStateAction<string>>
}

const Categories: FunctionComponent<Props> = ({selectedCategorie, setCategorie}) => {
  const carousel = useRef<HTMLDivElement>(null)
  const draggable = useRef<HTMLDivElement>(null)
  const [mouseUp, mouseDown, mouseMove] = useCarousel(carousel, draggable)

  const categories: JSX.Element[] = []

  CategoriesData.forEach((categorie) => {
    categories.push(<Categorie setCategorie={setCategorie} selected={categorie.name === selectedCategorie ? true : false} image={categorie.image} name={categorie.name}/>)
  })

  return (
    <section className='categories'>
      <div className='categories-items'>
        <div onTouchStart={(ev) => mouseDown(ev)} onTouchMove={(ev) => mouseMove(ev)} onTouchEnd={(ev) => mouseUp(ev)} onMouseDown={(ev) => mouseDown(ev)} onMouseMove={(ev) => mouseMove(ev)} onMouseUp={(ev) => mouseUp(ev)} ref={draggable} className='categories-draggable'/>
        <div ref={carousel} className='categories-movable'>
          {categories}
        </div>
      </div>
    </section>
  );
}

export default Categories;
