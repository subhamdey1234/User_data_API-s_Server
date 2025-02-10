import express from "express";
import getallusers from "../Controllers/Usercontrollers.js";
import { createuser } from "../Controllers/Usercontrollers.js";
const userRoutes=express.Router()

//User API's


//Get all User's Data
userRoutes.get("/allusers",getallusers)    // http://localhost:5000/user/allusers


//Create/add users
userRoutes.post("/add",createuser);       // http://localhost:5000/user/add







export default userRoutes;