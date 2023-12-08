import React from 'react'
import { Link } from 'react-router-dom';
import HeaderLog from './homepageComp/HeaderLog';

export default function BoothList(props) {
    const tableData = [
        {
          division: 'Dhaka',
          district: 'Gopalganj',
          city: 'Mirpur',
          area: 'Wasa',
          name: 'John Doe',
          email: 'john@example.com',
          password: '********',
          address: '123 Main St',
          phone: '123-456-7890',
        },
        // Add more data objects as needed
      ];
    

  return (
    <div>
        <HeaderLog/>
        <div className="container">
            <h3 className='text-center pb-2 text-white'>Booth List</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Division</th>
            <th>District</th>
            <th>City</th>
            <th>Area</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.division}</td>
              <td>{data.district}</td>
              <td>{data.city}</td>
              <td>{data.area}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.password}</td>
              <td>{data.address}</td>
              <td>{data.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {/* Submit Button */}
        <div className="text-center">
            <button type="submit" className="btn btn-success" ><Link className="text-decoration-none text-white" to="/setup">Add New Booth</Link></button>
        </div>
    </div>
  )
}
