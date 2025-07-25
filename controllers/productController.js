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

export function getProducts(req, res){
    Product.find().then(
        (products)=>{
            res.json(products)
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message: "Product not found"
            })
        }
    )
}

export function deleteProduct(req, res) {

    if (req.user == null) {
        res.status(403).json({
            message: "You need to login first"
        });
        return;
    }

    Product.findOneAndDelete({
        productId: req.params.productId
    }).then((deletedProduct) => {
        if (!deletedProduct) {
            res.status(404).json({
                message: "Product not found"
            });
            return;
        }
        res.json({
            message: "Product deleted successfully"
        });
    }).catch((err) => {
        res.status(500).json({
            message: "Product not deleted"
        });
    });
}

export function updateProduct(req, res){

    if(req.user == null){
        res.status(403).json({
            message: "You need to login first"
        })
        return;
    }

    Product.findOneAndUpdate({
        productId : req.params.productId
    },req.body).then(
        ()=>{
            res.json({
                message: "Product updated successfully"
            })
        }
    ).catch(
        (err)=>{
            res.status(500).json({
                message: "Product not updated"
            })
        }
    )
}
