import React from 'react';
import './Summary.css';

const Summary = () => {
  return(
    <div className='summary'>
      <div className='heading-summary'>
      <h1 className='heading'>
        Explore Foods from<br />
        around the Globe 
      </h1>
      </div>
      <div className='paragraph'>
      <p className='summary-para'>
      Whether you're looking for healthy recipes, or ideas on<br />
      how to use leftovers from your fridge, we've numerous<br />
      recipes to choose from, so you'll be able to find the<br />
      perfect dish.
      </p>
      </div>
      <img src='assets/food.svg' alt='random' />
    </div>
  )
}

export default Summary;