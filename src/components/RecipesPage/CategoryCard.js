import React from 'react';
import './CategoryCard.css';

const CategoryCard = (props) => {
  return(
        <div className='category-content'>
          <img className='category-img' src={props.imgsrc} alt='food-category' />
          <h3 className='category-title'>{props.title}</h3>
        </div>
     )
}

export default CategoryCard;