import React from 'react'

export default function HeaderCancelled() {
  return (
    <div>
      <div id="home">
      {/* Background Image */}
      <img className="bg-style" src="bg.avif" alt="background" />

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <img src="favicon.ico" alt="logo" />
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
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}
