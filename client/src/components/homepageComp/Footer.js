import React from 'react';
import '../../styles/nav.css';

// Footer component represents the footer section of the page
function Footer() {
  return (
    <div>
      {/* Footer Content */}
      <div className="container p-5" id="footer">
        <div className="row">
          {/* About Us */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-box">
              <div className='d-flex'>
                <img className="" src="favicon.ico" alt="logo here"/>
                <h3 className='m-1'>INFORCE</h3>
              </div>
              <h2 className="text-uppercase">About Us</h2>
              <p>Dedicated to transforming traffic management, our system integrates advanced technology and streamlined processes to enhance road safety, optimize enforcement, and ensure efficient traffic control.</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-box">
              <h2 className="text-uppercase">Useful Links</h2>
              <ul>
                <li><a href="#">BRTA</a></li>
                <li><a href="#">Fine List</a></li>
                <li><a href="#">Notice</a></li>
                <li><a href="#">Quick View</a></li>
              </ul>
            </div>
          </div>

          {/* Follow Us */}
          <div className="col-lg-4 col-sm-6">
            <div className="single-box">
              <h2 className="text-uppercase">Follow us on</h2>
              <p className="socials">
                <i className="fa fa-facebook"></i>
                <i className="fa-brands fa-google"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="row">
        <div className="col-12">
          <p className="fs-5 text-center text-white">&copy; Scarlet Squad</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
