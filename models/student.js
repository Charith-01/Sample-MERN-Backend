import mongoose from "mongoose";

//Create Structure
const studentSchema = new mongoose.Schema({
    name : String,
    age : Number,
    city : String
})

//Create Model (collection name, schema)
const Student = mongoose.model("students", studentSchema);

export default Student;