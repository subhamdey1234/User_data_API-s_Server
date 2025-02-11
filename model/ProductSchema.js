import mongoose, { Schema } from "mongoose";

const ProductSchema=new mongoose.Schema({
    name:{type:String,required:true},
    brand:{type:String},
    price:{type:Number},
    stocks:{type:Number},
    discount:{type:Number},
    },{timestamps:true});

    const Productmodel=mongoose.model("Product",ProductSchema);

    export default Productmodel;

