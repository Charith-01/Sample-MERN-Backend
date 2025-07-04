import User from "../models/user.js";
import bcrypt from "bcrypt";

export function saveUser(req, res){

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    
    const user = new User({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        password : hashPassword
    })

    user.save().then(()=>{
        res.json({
            message: "Usr saved successfully"
        })
    }).catch(()=>{
        res.json({
            message: "User not saved"
        })
    })
}
