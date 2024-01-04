import React,{useState, useEffect} from 'react';
// import '../styles/App.css';
import {useNavigate} from 'react-router-dom';
import Header from '../homepageComp/Header';
import Slider from '../homepageComp/Slider';


function SignUp() {
  const [userType, setUserType] = useState("");
  const navigate=useNavigate();

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);

    if (selectedUserType === "agent") {
      navigate('/trafficcontroller');
    } else if (selectedUserType === "driver") {
      navigate('/drivers');
    }
  };

  return (
    <div className="container">
      {/* Header Component */}
      <div>
        <Header/>
        {/* Sign-up Form */}
      <section>
        <div className="container mt-1 pt-4">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 m-auto">
              <div className="card border-0 shadow custom-card">
                <div className="card-body p-4 ">
                  {/* User Icon */}
                  <div className="d-flex justify-content-center mb-2">
                    <i className="fa-solid fa-user"></i>
                  </div>
      {/* Select Type of User */}
                  <div className="row justify-content-center">
        <div className="col-6">
          <select
            id="inputUser"
            className="form-select"
            value={userType}
            onChange={handleUserTypeChange}
          >
            <option value="" disabled>Select User Type</option>
            <option value="agent">Traffic Agent</option>
            <option value="driver">Driver or Vehicle Owner</option>
          </select>
        </div>
      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <div>
        <Slider/>
      </div>
      
      
    </div>
  );
}

export default SignUp;
