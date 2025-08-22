import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbconfig.js";
import allowanceRoutes from "./routes/allowanceRoutes.js";

const app = express();

const PORT = process.env.PORT || 3000;
connectDB();

app.use(express.json());

// API endpoints

app.get("/", (req, res) => {
    res.send("API Working");
   
});

app.use("/api/auth",allowanceRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
})
