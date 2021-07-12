const express= require('express');
const app = express();
    app.get("/",(req,res)=>{
        res.send("Welcome to My Home Page");
    });
    app.get("/About",(req,res)=>{
        res.send("Welcome to My About Us Page");
    });
    app.get("/Contact",(req,res)=>{
        res.send("Welcome to My Contact Us  Page");
    });
    app.get("*",(req,res)=>{
        res.render("Welcome to My Demo Page");
    });
    app.listen(3000,()=>{
        console.log("listening at port 3000 is Started ");
    });