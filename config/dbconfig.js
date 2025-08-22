import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGOOSE);
        console.log("Database connected successfully");
    }
    catch(error){
        console.error("Database connection failed:", error);
        process.exit(1); // Exit the process with failure
    }
};

export default connectDB;
