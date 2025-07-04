import Item from "../models/item.js";

export function saveItems(req, res){

    const item = new Item(req.body);

    item.save().then(
        ()=>{
            res.json({
                message: "Item saved"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )
}

export function getAllItems(req, res){

    Item.find().then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )
}

export function updateItems(req, res){

}

export function deleteItems(req, res){

}

export function getAllGoodItem(req, res){

    res.json({
        message: "Good Items"
    })
}

export function searchItem(req, res){

    //const itemName = req.body.name;

    const itemName = req.params.name;

    Item.find(
        {
            name : itemName
        }
    ).then(
        (items)=>{
            res.json(items)
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )
}