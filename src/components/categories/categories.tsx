import React from 'react';
import Categorie from '../common/categorie/categorie';
import CategoriesData from '../../data/categories';
import './categories.css';

function Categories() {

  const categories: JSX.Element[] = []

  CategoriesData.forEach((categorie) => {
    categories.push(<Categorie selected={categorie.name === 'Todos' ? true : false} image={categorie.image} name={categorie.name}/>)
  })

  return (
    <section className='categories'>
      {categories}
    </section>
  );
}

export default Categories;
