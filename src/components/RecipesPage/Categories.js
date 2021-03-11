import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CategoryCard from "./CategoryCard";
import meal_Of_Day_Data from "./CategoryData/MealOfDay";
import healthy_meals_Data from "./CategoryData/HealthyMeals";
import diet_meals_Data from "./CategoryData/DietMealsData";
import around_the_world_Data from "./CategoryData/AroundTheWorld";
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

      <div className="meal-of-day">
        <h1 className="meal-heading">Meals of the day</h1>
        <div className="cards-set1">
          {meal_Of_Day_Data.map((val) => {
            return <CategoryCard 
            imgsrc={val.imgsrc} 
            title={val.title} />;
          })}
        </div>
      </div>

      <div className="healthy-meals">
        <h1 className="meal-heading">Healthy Meals</h1>
        <div className="cards-set2">
          {healthy_meals_Data.map((val) => {
            return <CategoryCard 
            imgsrc={val.imgsrc} 
            title={val.title} />;
          })}

        </div>
      </div>

      <div className="diet-meals">
        <h1 className="meal-heading">Diet Meals</h1>
        <div className="cards-set3">
          {diet_meals_Data.map((val) => {
            return <CategoryCard 
            imgsrc={val.imgsrc} 
            title={val.title} />;
          })}
          
        </div>
      </div>

      <div className="around-the-world-meals">
        <h1 className="meal-heading">Around The World</h1>
        <div className="cards-set4">
          {around_the_world_Data.map((val) => {
            return <CategoryCard 
            imgsrc={val.imgsrc} 
            title={val.title} 
            />
          })}
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
