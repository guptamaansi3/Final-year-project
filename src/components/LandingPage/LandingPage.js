import React from 'react';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';
import Search from '../Search-button/Search';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <Summary />
      <Search />
    </div>
  );
}