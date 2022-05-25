const express = require("express");
const app = express();

app.get("/home", (req, res)=>{
    res.send("Your request haas been taken care")
})