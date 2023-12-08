const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("Server is Woking Successfully")
});
app.get("/agent",(req,res)=>{
    res.send("Agent Server is Woking Successfully")
});

app.listen(8000);