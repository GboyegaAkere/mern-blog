import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "../api/routes/user.route.js"
import authRoutes from "../api/routes/auth.route.js"


dotenv.config()

mongoose.connect(process.env.MONGO)

const app = express();

app.use(express.json())

app.listen(3000,() => {
    console.log("server is runing on normal port with a lot of speed")
})

app.use('/api/user', userRoutes) 
app.use('/api/auth', authRoutes) 
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode ||500;
    const message = err.message || "internal server error"
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})