const express= require('express');
const app= express();
  app.get("/",(req,res)=>{
      res.send("Hello World from express js");
  });
  app.get("/About",(req,res)=>{
    res.send("Hello World from About Us Page");
});
app.get("/Contact",(req,res)=>{
    res.send("Hello World from Contact Us Page");
});

  app.listen(8000,()=>{
      console.log("Listening is started at 8000 Port");
  });