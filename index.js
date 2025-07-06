import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';
import jwt, { decode } from 'jsonwebtoken';


const app = express();

mongoose.connect("mongodb+srv://admin:1234@cluster0.ifxv2rb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(
    ()=>{
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("Connection failed");
    }
)

//Middleware to parse JSON bodies
app.use(bodyParser.json());

//Middleware to Authorization users
app.use(
    (req, res, next)=>{
        const header = req.header("Authorization");
        
        if(header != null){
            const token = header.replace("Bearer ","");

            jwt.verify(token, "sample123", (err, decoded)=>{
                
                if(decoded != null){
                    req.user = decoded
                }
            })
        }
        next()
    }
)


//Call to routes
app.use("/api/student", studentRouter);
app.use("/api/item", itemRouter);
app.use("/api/user", userRouter);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
