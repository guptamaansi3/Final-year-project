import React from 'react';
import Cards from './Cards/Cards';
import Intro from "./Intro/Intro";
import './Services.css';

const Services = () => {
return(
  <div className='Services'>
    <Intro />
  <div className='cards'>
    <Cards 
    image= 'assets/salad.svg' 
    title= 'Search by recipe'
    content= "Already know what you're looking for? Just type the recipe name in search and choose a recipe."
    />
    <Cards 
    image= 'assets/vegetables.svg' 
    title= 'Search by ingredients'
    content= "Looking for recipe ideas? Just input ingredients in the Ingredients filter and see what comes up."
    />
    <Cards 
    image= 'assets/serving-dish.svg' 
    title= 'Filter recipes'
    content= 'Want to keep only certain recipes? We have both diet and health filters to help you find the perfect recipe for you.'
    />
  </div>
  </div>
   )
}

export default Services;