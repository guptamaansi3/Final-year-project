import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
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
          onclick="javascript.alert(input)"
          className="search-svg"
          src="assets/search.svg"
          alt="random"
        />
      </div>
      <h1 className="meal-heading">Meals of the day</h1>
      <Footer />
    </div>
  );
};

var input = document.getElementById("search-input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("search-button").click();
  }
});

export default Categories;
