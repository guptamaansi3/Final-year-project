import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Intro from './components/Services/Intro/Intro';
import "./styles.css";


export default function App() {
  return (
    <div className="App">
      <LandingPage />
      <Intro />
    </div>
  );
}
