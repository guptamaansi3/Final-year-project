import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Categories.css';

const Categories = () => {
  return(
    <div className='categories-page'>
      <Header />
      <div className='categories'>
      <h1>Categories</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Categories;