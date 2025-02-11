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


export const userupdation=async(req,res)=>{
    try {
        
const {email}=req.query;
const isuser=model.findOne({email});
if (isuser) {
    await model.updateOne({email},{$set:{...req.body}});
    res.status(201).send("Updated Successfully");
    console.log("User Updated Successfully");
    
}
else{
    res.send(400).send("Something Went Wrong");
}

    } catch (error) {
        console.log(error);
        
    }
}



export default getallusers;