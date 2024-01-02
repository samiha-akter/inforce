const express = require('express');
const cors = require('cors');

const usersRoute = require("./routers/users.route");

const con = require('./db/config');
const app = express();

app.use(express.json());
app.use(cors());

//drivers or users route
app.use("/users", usersRoute);


app.listen(8000, () => {
    console.log("Server is running on port 8000");
});



// app.post("/signup", async (req, resp) => {
//     const data = req.body;
//     try {
//         const results = await new Promise((resolve, reject) => {
//             con.query("INSERT INTO users SET ?", data, (error, results, fields) => {
//                 if (error) {
//                     reject(error);
//                 } else {
//                     resolve(results);
//                 }
//             });
//         });

//         // Manipulate the results object if needed
//         if (results) {
//             // Remove sensitive information before sending the response
//             delete results.password;
//             resp.send(results);
//         } else {
//             console.error("Error inserting data into the database");
//             // Send an appropriate response in case of an error
//             resp.status(500).send("Internal Server Error");
//         }
//     } catch (error) {
//         console.error("Error inserting data into the database");
//         // Send an appropriate response in case of an error
//         resp.status(500).send("Internal Server Error");
//     }
// });


// app.post("/login", async (req, resp) => {
//     if (req.body.password && req.body.email) {
//         try {
//             const connection = await pool.getConnection();
//             const [rows] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [req.body.email, req.body.password]);
//             connection.release();

//             if (rows.length > 0) {
//                 // Omit the password field before sending the response
//                 delete rows[0].password;
//                 resp.send(rows[0]);
//             } else {
//                 resp.send({ result: "No User found" });
//             }
//         } catch (error) {
//             console.error("Error executing MySQL query:", error);
//             resp.status(500).send({ result: "Internal Server Error" });
//         }
//     } else {
//         resp.status(400).send({ result: "Invalid request parameters" });
//     }
// });