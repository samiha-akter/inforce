const connection = require("../MySql/db");

////
app.post("/signup", async (req, resp) => {
    const data = req.body;
    try {
        const results = await new Promise((resolve, reject) => {
            con.query("INSERT INTO users SET ?", data, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Manipulate the results object if needed
        if (results) {
            // Remove sensitive information before sending the response
            delete results.password;
            resp.send(results);
        } else {
            console.error("Error inserting data into the database");
            // Send an appropriate response in case of an error
            resp.status(500).send("Internal Server Error");
        }
    } catch (error) {
        console.error("Error inserting data into the database");
        // Send an appropriate response in case of an error
        resp.status(500).send("Internal Server Error");
    }
});


module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers };