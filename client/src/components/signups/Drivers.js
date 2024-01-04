import React,{useState} from 'react';
import '../../styles/nav.css';
import {NavLink, useNavigate} from 'react-router-dom';
import Header from '../homepageComp/Header';

// SignUp component represents the sign-up page
function Drivers() {
   
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicleModel: '',
    drivingLicenseNo: '',
    vehicleRegistrationNo: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Hook to navigate
  const navigate = useNavigate();

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Check if all fields are filled
    for (const key in formData) {
      if (formData[key] === '') {
        alert('Please fill in all fields!');
        navigate('/drivers');
        return;
      }
    }

    // Check if passwords match 
    if(formData.password !== formData.confirmPassword){
      alert('Please fill the passwords correctly!');
      navigate('/drivers');
      return;
    }

    try {
      // Send a POST request to the server with form data
      let result = await fetch('http://localhost:8000/drivers', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      // Parse the response as JSON
      result = await result.json();
      
      // If successful, save user data in local storage and navigate to home page
      if(result){
        localStorage.setItem("user", JSON.stringify(result.result));
        navigate('/')
      }
  } catch (error) {
      console.error("Error during fetch operation:", error);
  }
    // Navigate to the login page
    navigate('/login');
    

  };
  
  return (
    <div>
      {/* Header Component */}
      <Header/>

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

                   {/* Input fields for user information */}
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Name" aria-label="name" name="name" value={formData.name}
                          onChange={handleChange}/>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Phone" aria-label="phone"
                        name="phone" value={formData.phone}
                          onChange={handleChange}/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control m-2" placeholder="Vehicle Model Name" 
                        name="vehicleModel"
                        aria-label="vehicle model" value={formData.vehicleModel}
                          onChange={handleChange}/>
                      </div>
                    </div>

                    

                    
                    <div className="row">
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputLicense" placeholder="License No." 
                        name="drivingLicenseNo"
                        value={formData.drivingLicenseNo}
                        onChange={handleChange}/>
                      </div>
                      <div className="col">
                        <input type="text" className="form-control m-2" id="inputVehicleReg" placeholder="Vehicle 
                        Registration No." name="vehicleRegistrationNo"
                        value={formData.vehicleRegistrationNo}
                          onChange={handleChange}/>
                      </div>
                    </div>
                    

                    

                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control col m-2"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <div className="row">
                      <div className="col">
                        <input
                          type="password"
                          id="password"
                          className="form-control m-2"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="password"
                          id="password"
                          className="form-control m-2"
                          placeholder="Confirm Password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                     {/* Checkbox for agreeing to terms and conditions */}
                    <div className="col-12 m-2">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Agree to <NavLink to="/terms">Terms and Conditions</NavLink>
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
export default Drivers; 