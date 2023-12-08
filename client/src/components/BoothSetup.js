import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import HeaderLog from './homepageComp/HeaderLog';

// BoothSetup component represents a booth setup form page
export default class BoothSetup extends Component {
  state = {
    division: "",
    name: "",
    email: "",
    district: "",
    city: "",
    area: "",
    password:"",
    address: "",
    phone:"",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" || 
      this.state.email === "" ||
      this.state.division === "" ||
      this.state.city === "" ||
      this.state.area === "" ||
      this.state.district === "" ||
      this.state.address === "" ||
      this.state.phone === "" ||
      this.state.password === ""
      ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addBoothHandler(this.state);
    this.setState({ division: "",
    name: "",
    email: "",
    district: "",
    city: "",
    area: "",
    password:"",
    address: "",
    phone:""});
  };
  render() {
    return (
      <div>
        {/* Header */}
        <HeaderLog/>

        {/* Booth Setup Form */}
        <section>
          <div className="container mt-3 pt-3">
            <div className="row">
              <div className="col-12 col-sm-7 col-md-6 m-auto">
                <div className="card border-0 shadow custom-card">
                  <div className="card-body p-4">
                    <h3 className='text-center pb-2'>Setup Booth</h3>
                    <form onSubmit={this.add}>
                      {/* Dropdown */}
                      <div className="mb-3">
                        <select 
                        className="form-select" 
                        id="division" 
                        name="division"
                        onChange={(e) => this.setState({ division: e.target.value })}
                        >
                          <option selected disabled>Select Division</option>
                          <option value="Dhaka">Dhaka</option>
                          <option value="Chattogram">Chattogram</option>
                          <option value="Sylhet">Sylhet</option>
                          <option value="Khulna">Khulna</option>
                          <option value="Rajshahi">Rajshahi</option>
                          <option value="Barishal">Barishal</option>
                          <option value="Rangpur">Rangpur</option>
                          <option value="Mymensingh">Mymensingh</option>
                        </select>
                      </div>
  
                      {/* Input Fields 2*/}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="district" 
                          name="district" 
                          placeholder="District"
                          value={this.state.district}
                          onChange={(e) => this.setState({ district: e.target.value })}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="city" 
                          name="city" 
                          placeholder="City"
                          value={this.state.city}
                          onChange={(e) => this.setState({ city: e.target.value })}
                          />
                        </div>
                      </div>
  
                      {/* Input Fields 4 */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="area" 
                          name="area" 
                          placeholder="Area"
                          value={this.state.area}
                          onChange={(e) => this.setState({ area: e.target.value })}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name" 
                          placeholder="Booth's Name"
                          value={this.state.name}
                          onChange={(e) => this.setState({ name: e.target.value })}
                          />
                        </div>
                      </div>
  
                      {/* Input Fields 6 */}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input type="email" 
                          className="form-control" 
                          id="boothemail" 
                          name="boothemail" 
                          placeholder="Booth's Email"
                          value={this.state.email}
                          onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                          type="password" 
                          className="form-control" 
                          id="password" 
                          name="password" 
                          placeholder="Booth's Password"
                          value={this.state.password}
                          onChange={(e) => this.setState({ password: e.target.value })}
                          />
                        </div>
                      </div>
  
                      {/* Input Fields 8*/}
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="address" 
                          name="address" 
                          placeholder="Booth's Address"
                          value={this.state.address}
                          onChange={(e) => this.setState({ address: e.target.value })}
                          />
                        </div>
                        <div className="col-md-6 mb-3">
                          <input 
                          type="text" 
                          className="form-control" 
                          id="phone" 
                          name="phone" 
                          placeholder="Booth's Phone"
                          value={this.state.phone}
                          onChange={(e) => this.setState({ phone: e.target.value })}
                          />
                        </div>
                      </div>
  
                    
                      
                      {/* Submit Button */}
                      <div className="text-center">
                        <button type="submit" className="btn btn-outline-success">
                          <Link className="text-decoration-none text-white" to="/list">Create Booth
                          </Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}



