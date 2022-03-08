import mongoose from "mongoose";
const bookSchema=new mongoose.Schema({
    Name:String,
    Author:String,
    NumberOfPages:Number,
    Summary:String
});

export default mongoose.model("BookStore",bookSchema);
