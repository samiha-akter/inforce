const connection = require("../db/config");

// Creating Users using post method

const createDrivers=(req,res)=>{

    const {
        name,
        phone,
        vehicleModel,
        drivingLicenseNo,
        vehicleRegistrationNo,
        email,
        password,
      } = req.body;

    // Insert the data into the "drivers" table
  const sql ="INSERT INTO `drivers`(`name`, `email`, `password`, `phone`, `vehicleRegistrationNo`, `drivingLicenseNo`, `vehicleModel`) VALUES (?, ?, ?, ?, ?, ?, ?)";
let arr = [name, phone, vehicleModel, drivingLicenseNo, vehicleRegistrationNo, email, password];

connection.query(sql,arr,(err) => {

    if (err) {
      console.error('Error executing MySQL query: ' + err.message);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }else{
    // Return the inserted data to the client
    res.status(201).json({ result });}
  }
);
  
};


module.exports = { createDrivers };