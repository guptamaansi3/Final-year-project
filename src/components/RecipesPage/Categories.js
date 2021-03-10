import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategoryCard from './CategoryCard';
import mealOfDayData from './MealOfDay';
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <Header />
      <div className="hero-banner">
        <h1 className="hero-heading">Search through 1.7+ million recipes</h1>
        <input
          id="search-input"
          className="input-search"
          type="search"
          placeholder="Recipe Search"
        />
        <img
          id="search-button"
          className="search-svg"
          src="assets/search.svg"
          alt="random"
        />
      </div>
      <h1 className="meal-heading">Meals of the day</h1>
      <div className='cards-set1'>
      <CategoryCard 
      imgsrc= {mealOfDayData[0].imgsrc}
      title = {mealOfDayData[0].title}
      />
      <CategoryCard 
      imgsrc= {mealOfDayData[1].imgsrc}
      title = {mealOfDayData[1].title}
      />
      <CategoryCard 
      imgsrc= {mealOfDayData[2].imgsrc}
      title = {mealOfDayData[2].title}
      />
      <CategoryCard 
      imgsrc= {mealOfDayData[3].imgsrc}
      title = {mealOfDayData[3].title}
      />
      </div>
      <Footer />
    </div>
  );
};


export default Categories;
