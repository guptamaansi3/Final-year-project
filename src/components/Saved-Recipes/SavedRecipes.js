import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './SavedRecipes.css';

const Categories = () => {
  return(
    <div className='saved-recipes-page'>
      <Header />
      <div className='saved-recipes'>
      <h1>View all your Saved Recipes</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Categories;