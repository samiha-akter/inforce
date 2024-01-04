const {createDrivers} = require("../controllers/drivers.controller");

const route = require("express").Router();

route.post("/",createDrivers);


module.exports = route;