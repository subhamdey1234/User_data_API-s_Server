import express from "express";
import mongoose from "mongoose";
import mongodbconnection from "./config/db.js";
import model from "./model/Schema.js";
import userRoutes from "./routes/userRoutes.js";

const app=express();


//Middlewares--------------------------
app.use(express.json());//Json Parser.
app.use(express.urlencoded({extended:true}));
//-------------------------------------


//---Api's----------------------
app.get("/",(req,res)=>{
res.send("Hello");
});
//-------------------------------

//routes
app.use("/user",userRoutes);


//Connect the DB------
mongodbconnection();
//---------------------



app.listen(3000,"localhost",()=>{
    console.log("http://localhost:5000");
    
})

