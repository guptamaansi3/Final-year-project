import React from 'react';
import Header from '../components/Header/Header';
import Summary from '../components/Summary/Summary';
import Search from '../components/Search-button/Search';

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <Header />
      <Summary />
      <Search />
    </div>
  );
}