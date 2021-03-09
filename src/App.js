import React from "react";
import HomePage from './components/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom';
import Recipes from './components/RecipesPage/Recipes';
import SavedRecipes from './components/Saved-Recipes/SavedRecipes';
import "./styles.css";

export default function App() {
  return (
    <Switch>
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route exact path='/recipes' component={Recipes} />
      <Route exact path='/saved-recipes' component={SavedRecipes} />
    </div>
    </Switch>
  );
}
