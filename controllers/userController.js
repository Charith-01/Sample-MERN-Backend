import User from "../models/user.js";
import bcrypt from "bcrypt";

export function saveUser(req, res){
    
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    console.log(hashPassword);
}
