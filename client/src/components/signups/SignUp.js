import React,{useState, useEffect} from 'react';
// import '../styles/App.css';
import {useNavigate} from 'react-router-dom';
import Header from '../homepageComp/Header';
import Slider from '../homepageComp/Slider';
import Homepage from '../homepageComp/Homepage';


function SignUp() {
  const [userType, setUserType] = useState("");
  const navigate=useNavigate();

  const handleUserTypeChange = (event) => {
    const selectedUserType = event.target.value;
    setUserType(selectedUserType);

    if (selectedUserType === "agent") {
      navigate('/tc');
    } else if (selectedUserType === "driver") {
      navigate('/user');
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

//   const [name,setName]=useState("");
//     const [password,setPassword]=useState("");
//     const [email,setEmail]=useState("");
//   useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//         navigate('/')
//     }
// }, [])

// const collectData = async () => {
//   // Check if any of the fields is empty
//   if (!name || !email || !password) {
//       console.error("All fields must be filled");
//       return;
//   }

//   try {
//       let result = await fetch('http://localhost:8000/signup', {
//           method: 'POST',
//           body: JSON.stringify({ name, email, password }),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       });

//       result = await result.json();
      
//       if(result){
//         localStorage.setItem("user", JSON.stringify(result.result));
//         navigate('/')
//       }
//   } catch (error) {
//       console.error("Error during fetch operation:", error);
//   }
// };



{/* <input type="text" className='inputBox' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/> */}