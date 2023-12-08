import React from 'react';
// import Footer from './Footer';
import { NavLink } from 'react-router-dom';
 
export default function Dashboard() {
  return (
    <div id='home'>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <img src='favicon.ico' alt="logo" />
          <h2 className="text-light">INFORCE</h2>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navigation Links */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#footer">
                  Contact
                </a>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex input-group w-auto mb-2 mb-lg-0">
              <input
                type="search"
                className="form-control rounded-start"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text rounded-end" id="search-addon">
                <i className="fas fa-search"></i>
              </span>
            </form>

            {/* Login Button */}
            <button className="btn btn-outline-success m-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Dashboard</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          {/* Offcanvas body content */}
          <NavLink to="/">
          <button type="button" className="btn">
            <i class="fa-solid fa-house"></i>
            Homepage
          </button>
          </NavLink>
          {/* ... */}
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
