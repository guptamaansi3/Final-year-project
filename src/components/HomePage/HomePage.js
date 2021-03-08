import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import Services from '../Services/Services';
import Footer from '../Footer/Footer';


export default function HomePage() {
  return (
    <div className="App">
      <LandingPage />
      <Services />
      <Footer />
    </div>
  );
}


