import React from 'react';
import '../styles/nav.css';
import Header from './homepageComp/Header';
import Slider from './homepageComp/Slider';
import Footer from './homepageComp/Footer';

// Homepage component represents the main page of the application
function Homepage() {
  return (
    <div>
      {/* Container Wrapper */}
      <div className="container-wrapper">
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
