import mongoose from "mongoose";
import express from "express";
import model from "../model/Schema.js";

export const getallusers=async(req,res)=>{
try {
    const allusers=await model.find();

    res.status(200).send(allusers);
    console.log(allusers);
    
} 
catch (error) {

    res.status(500).send({error:"Something Went Wrong"})
    console.log("wrong");
    

}
}



 export const createuser=async(req,res)=>{
    try{
    
        const userdata=await model(req.body);

        await userdata.save();

        res.status(201).send({message:"User Added Successfully"});
        console.log("User Added Successfully");
        

    }
    catch(err){
        console.log(err);
        req.status(500).send({err:"Something went wrong",msg:err.message});
        
    }
}




export default getallusers;