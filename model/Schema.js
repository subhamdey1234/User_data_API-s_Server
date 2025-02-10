import mongoose from "mongoose"
import mongodbconnection from "../config/db.js"

const Schema=new mongoose.Schema({
         firstname:{
            type:String,
            required:true,
            minlength:4
         },
         lastname:{
            type:String,
            minlength:1
         },
         email:{
            type:String,
            unique:true,
            required:true
         },
         mobile:{
            type:Number,
            maxlength:10,
            minlength:10
         },
         password:{
            type:String,
            minlength:6
         },
         gender:{
            type:String,
            enum:["Male","Female"]
         },
         age:{
            type:Number
         },
         address:{
            city:String,
            zip:Number,
            state:String
         }


});

const model=mongoose.model("Credential",Schema);


export default model;

