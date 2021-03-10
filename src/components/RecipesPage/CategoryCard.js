import React from 'react';

const CategoryCard = (props) => {
  return(
      <button className='category-card'>
        <div className='category-content'>
          <img className='category-img' src={props.image} alt='food-category' />
          <h3 className='category-title'>{props.title}</h3>
        </div>
      </button>
     )
}

export default CategoryCard;