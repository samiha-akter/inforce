import React from 'react';
import '../../styles/nav.css';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';

// Homepage component represents the main page of the application
function Homepage() {
  return (
    <div>
    //   {/* Container Wrapper */}
      <div className="container-wrapper">
        {/* Header */}
        <Header />

        {/* Slider */}
        <Slider />
      </div>

      <div>
        <Footer/>
      </div>
      </div>

  );
}

export default Homepage;
