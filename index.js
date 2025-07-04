import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemRouter.js';


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

app.use("/student", studentRouter);
app.use("/item", itemRouter);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
