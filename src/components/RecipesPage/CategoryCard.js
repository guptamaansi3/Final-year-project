import React from 'react';
import './CategoryCard.css';

const CategoryCard = (props) => {
  return(
        <button className='category'>
        <div className='category-content'>
          <img className='category-img' src={props.imgsrc} alt='food-category' />
          <h3 className='category-title'>{props.title}</h3>
        </div>
        </button>
     )
}

export default CategoryCard;