const express= require('express');
const app= express();
    app.get("/",(req,res)=>{
        res.send({
            id:1,
            name:"Maina",
            Age:"2 Years"
        })
    });
    app.get("/About",(req,res)=>{
        res.send([{
                id:1,
                name:" Manisha",
                Age:"38 Years"
        },{
            
            id:2,
            name:" Vaibhav",
            Age:"20 Years"
        },{
            
            id:3,
            name:" Shweta",
            Age:"22 Years"
        }]);     
        
    });
    app.get("/Contact",(req,res)=>{
        res.json({
            id:1,
            name:"Maina",
            Age:"2 Years"
        })
    });
    app.get("/Temp",(req,res)=>{
        res.send("id:2,name:Gaurav")
    });
    app.listen(3000,()=>{
        console.log("This application Started at 3000 Port ");
    });
