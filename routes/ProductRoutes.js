import { Router } from "express";
import getallproducts, { deleteproducts, updation } from "../Controllers/Productcontrollers.js";
import { addproducts } from "../Controllers/Productcontrollers.js";
const ProductRoutes=Router();


//API's---------------------
//Getting
ProductRoutes.get("/allproducts",getallproducts);

//Adding
ProductRoutes.post("/addproducts",addproducts);

//Deleting

ProductRoutes.delete("/deleteproduct",deleteproducts);


//Updating

ProductRoutes.put("/update",updation);



export default ProductRoutes;