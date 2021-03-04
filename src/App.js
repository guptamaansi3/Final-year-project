import React from 'react';
import "./styles.css";
import Header from './components/Header/Header';
import Summary from './components/Summary/Summary';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
    </div>
  );
}
