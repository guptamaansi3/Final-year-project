import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Services from './components/Services/Services';

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <LandingPage />
      <Services />
    </div>
  );
}
