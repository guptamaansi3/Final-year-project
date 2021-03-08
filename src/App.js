import React from "react";
import HomePage from './components/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom';
import "./styles.css";

export default function App() {
  return (
    <Switch>
    <div className="App">
      <HomePage />
    </div>
    </Switch>
  );
}
