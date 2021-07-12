const express= require('express');
const app= express();
    app.get("/",(req,res)=>{
        res.write("<h1>Welcome to my Home Page </h1>");     
        
        res.write("<h2> this Content is under the html Tag</h2>");    
        res.send();
    });
    app.get("/About",(req,res)=>{
        res.send("<h1> this Content is under the html Tag </h1>");     
        
    });
    app.listen(3000,()=>{
        console.log("This application Started at 3000 Port ");
    });
