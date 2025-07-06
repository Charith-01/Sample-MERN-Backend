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

    const product = new Product(req.body);

    product.save().then(
        ()=>{
            res.json({
                message: "Product save successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message : "Product not save"
            })
        }
    )
}