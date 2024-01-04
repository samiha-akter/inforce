// ///1 part
// useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//         navigate('/')
//     }
// }, [])



// ///2nd part
// <Route path="/setup" element={<BoothSetup addBoothHandler={addBoothHandler} />} />
// <Route path="/list" element={<BoothList />} />
// <Route path="/fees" element={<Fees/>} />        
// <Route path="/dashboard" element={<Dashboard/>} />
// <Route path="/agentprofile" element={<AgentProfile/>}/> 
// <Route path="/caseassign" element={<CaseAssign/>}/>
// <Route path="/quickstatus" element={<QuickStatus/>}/>
// <Route path="/rules" element={<Rules/>}/>
// <Route path="/vehicles" element={<Vehicles/>}/> 


// ///3rd part
// const id = req.body.Student_id;
//   const name = req.body.name;
//   const email = req.body.email;
//   const phone = req.body.phone;
//   const dept_id = req.body.deptID;
//   const password = req.body.password;

//   let SQLquery;
//   let arr;
//     SQLquery =
//       "INSERT INTO drivers(`teacher_id`, `teacher_name`, `email`, `phone`, `dept_id`, `password`) VALUES (?,?,?,?,?,?)";

//     arr = [id, name, email, phone, dept_id, password];
  
//   connection.query(SQLquery, arr, (error) => {
//     if (error) console.log(error);
//     else res.send("Data has been inserted");
//   });


///4th part


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