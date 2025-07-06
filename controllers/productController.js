import Product from "../models/product.js";

export function createProduct(req, res){

    if(req.user == null){
        res.status(403).json({
            message: "You need to login first"
        })
        return;
    }

    if(req.user.role != "admin"){
        res.status(403).json({
            message: "You are not authorized to create a product"
        })
        return;
    }

    
}