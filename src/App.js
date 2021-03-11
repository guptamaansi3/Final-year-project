import React from "react";
import HomePage from "./components/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import SavedRecipes from "./components/Saved-Recipes/SavedRecipes";
import "./styles.css";
import Categories from "./components/RecipesPage/Categories";

export default function App() {
  return (
    <Switch>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/recipes" component={Categories} />
        <Route exact path="/saved-recipes" component={SavedRecipes} />
      </div>
    </Switch>
  );
}
