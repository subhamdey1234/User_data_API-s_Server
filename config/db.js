import mongoose from "mongoose";

const mongodbconnection=async()=>{

    try{
await mongoose.connect("mongodb://localhost:27017/mydatabase").then(()=>{
    console.log("Db Connected Successfully");
    
}).catch((err)=>{
console.log(err);
});
}

catch(err){
    console.log(err);
    
}

}

export default mongodbconnection;

