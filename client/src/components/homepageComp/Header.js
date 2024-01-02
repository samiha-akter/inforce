import React from 'react';
import '../../styles/nav.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';


// Header component represents the header section of the page
function Header() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout=()=>{
    localStorage.clear();
    navigate('/login')
  }

  return (
    <div id="home">
      {/* Background Image */}
      <img className="bg-style" src="bg.avif" alt="background" />

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <img src='favicon.ico' alt="logo"/>
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
            {/* Navigation Links  */}
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/agentprofile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Booth
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Rules
                </Link>
              </li>
            </ul>

            {/* Search Form */}
            <form className="ms-auto d-flex input-group w-auto mb-2 mb-lg-0">
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
              {
                auth?
                <NavLink className="btn btn-outline-success ms-1 text-light"
                type="button"
                id="form-open" onClick={logout} to="/login">Logout({ JSON.parse(auth).name})</NavLink>
                :
                <NavLink className="btn btn-outline-success ms-1 text-light"
              type="button"
              id="form-open" to="/login">Login</NavLink>
              }
              
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
