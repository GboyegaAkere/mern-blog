import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "../api/routes/user.route.js"
import authRoutes from "../api/routes/auth.route.js"


dotenv.config()

mongoose.connect(process.env.MONGO  ).then(
    () => {console.log("Databese is connected")

}).catch(err =>{
    console.log(err)
})

const app = express();
app.use(express.json())

app.listen(3000,() => {
    console.log("server is runing on normal port with a lot of speed")
})

app.use('/api/user', userRoutes) 
app.use('/api/auth', authRoutes) 