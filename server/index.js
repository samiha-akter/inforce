const express = require('express');
const cors = require('cors');

const driversRoute = require("./routers/drivers.route");

const con = require('./db/config');
const app = express();

app.use(express.json());
app.use(cors());

//drivers or users route
app.use("/drivers", driversRoute);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

