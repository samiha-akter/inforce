import React from 'react';
import '../styles/nav.css';
import HeaderLog from './homepageComp/HeaderLog';
import { Link, NavLink } from 'react-router-dom';

// Login component represents the login page
export default function Login() {
  return (
    <div>
      {/* Header */}
      <HeaderLog/>

      {/* Login Form */}
      <section>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 m-auto">
              <div className="card border-0 shadow custom-card-width custom-card">
                <div className="card-body p-4">
                  {/* User Icon */}
                  <div className="d-flex justify-content-center">
                    <i className="fa-solid fa-user"></i>
                  </div>

                  {/* Login Form */}
                  <form action="POST">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control my-4 py-2"
                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control my-4 py-2"
                      placeholder="Password"
                    />
                    <div className="text-center mt-3">
                      <button className="btn btn-outline-success">Login</button>
                      <p className='p-2'>
                        Don't have an Account?<br/>
                        <NavLink to="/signup">Sign-up</NavLink>
                        
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
