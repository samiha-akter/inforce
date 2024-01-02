const {getAllUsers,createUsers, updateUsers,deleteUsers} = require("../controllers/users.controller");

const route = require("express").Router();


route.get("/",getAllUsers);

route.post("/",createUsers);

route.put("/:id",updateUsers);

route.delete("/",deleteUsers);


module.exports = route;