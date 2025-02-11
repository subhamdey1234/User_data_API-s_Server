import Productmodel from "../model/ProductSchema.js";
import express from "express";

export const getallproducts=async(req,res)=>{
try {
    
const allproducts=await Productmodel.find();
res.status(200).send(allproducts);
console.log(allproducts);




} catch (error) {
   console.log(error);
    
}
}


export const addproducts=async(req,res)=>{
    try {
        
 const productsdata=await Productmodel(req.body);
 await productsdata.save();

 res.status(200).send({msg:"Data Added Successfully"});
 console.log("Data Added Successfully");

 

    } catch (error) {
        console.log(error);
        res.status(400).send({msg:"Something Went Wrong"});
        
    }
}

export const deleteproducts=async(req,res)=>{
    try {
        console.log(req.query);
        const data=req.query;
        const response=await Productmodel.deleteOne({...data});
        res.status(200).send(response);
        console.log("Product Deleted successfully");
        
        



    } catch (error) {
        console.log(error);
                res.status(400).send({msg:"Something Went Wrong"});

    }
}


export const updation=async(req,res)=>{
    try {
        const name=req.query;
        const isproduct=Productmodel.findOne({name});
if (isproduct) {
    await Productmodel.updateOne({name},{$set:{...req.body}});
    res.status(200).send({msg:"Product details added"});
}
else{
    res.status(400).send({msg:"Invalid Name"},{error:"Product Not found"});

}

    } catch (error) {
        console.log(error);
        
    }
}


export default getallproducts;