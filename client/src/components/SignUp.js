import React,{useState} from 'react';
import '../styles/nav.css';
import HeaderLog from './homepageComp/HeaderLog';
import {NavLink, useNavigate} from 'react-router-dom';
 
// SignUp component represents the sign-up page
function SignUp() {
  // State to track user type selection
  const [userType, setUserType] = useState(''); 
  const navigate = useNavigate();
  // Function to handle user type selection
  const handleUserTypeChange = (e) => {
    setUserType(e.target.value.toLowerCase());
  };


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    
    // Handle form submission logic here If all checks pass, continue with form submission
    navigate('/login');
    

  };
  
  return (
    <div>
      {/* Header */}
      <HeaderLog />

      {/* Sign-up Form */}
      <section>
        <div className="container mt-1 pt-1">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 m-auto">
              <div className="card border-0 shadow custom-card">
                <div className="card-body p-4 ">
                  {/* User Icon */}
                  <div className="d-flex justify-content-center mb-2">
                    <i className="fa-solid fa-user"></i>
                  </div>

                  {/* Sign-up Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control m-2" placeholder="First name" aria-label="First name"/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Last name" aria-label="Last name"/>
                      </div>
                    </div>

                    <div className="col-12 m-2">
                      <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
                    </div>

                    <div className="col-12 m-2">
                      <select id="inputUser" 
                      className="form-select"
                      value={userType}
                      onChange={handleUserTypeChange}
                      >
                        <option value="" disabled selected>User Type</option>
                        <option value="agent">Traffic Agent</option>
                        <option value="driver">Driver or Vehicle Owner</option>
                      </select>
                    </div>

                    {userType === 'driver' && (
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputLicense" placeholder="License No."/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputVehicleReg" placeholder="Vehicle Registration No."/>
                      </div>
                    </div>
                    )}

                    {userType === 'agent' && (
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputID" placeholder="Police Id"/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputReg" placeholder="Registration No."/>
                      </div>
                    </div>
                    )}

                    

                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control col m-2"
                      placeholder="Email"
                    />

                    <div className="row">
                      <div className="col">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control m-2"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control m-2"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>

                    <div className="col-12 m-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Agree to Terms and Conditions
                        </label>
                      </div>
                    </div>

                    <div className="text-center mt-3">
                      <button to="/" type="submit" className="btn btn-outline-success w-100">
                        Sign-up
                      </button>
                      <p className='p-2'>
                        Already have an Account?<br />
                        <NavLink to="/login">Login</NavLink>
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
export default SignUp; 