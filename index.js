//This page is Combination of html and index.js file i.e through js file we call html file
const express = require('express');
const app= express();
const path = require('path')
const staticpath= path.join(__dirname,"../public");
  app.use(express.static(staticpath));
  //  app.set("view engine","hbs");
  //  app.get("/",(req ,res)=>{
  //   res.render("index");
  // });
  app.get("/",(req ,res)=>{
    res.send("Welcome to my  page");
  });
  app.listen(8000,()=>{
      console.log("listening at port 8000");
  });
