import dotenv from "dotenv";
import connectDB from "./db/index.js";

//require("dotenv").config();

dotenv.config({ path: "./.env" });
connectDB()













/*import express from "express";

const app = express();

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{console.log("MongoDB connection error:", error);
        throw error});
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    } catch{
        console.error("Error", error)
        throw error
    }
})()*/