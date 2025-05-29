import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import postRoutes from "./routes/posts.js "
const app = express()

import dotenv from "dotenv"
dotenv.config()
app.use(bodyParser.json({limit:"30mb", extended: true}) )
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())
app.use("/posts",postRoutes)//this should be after the cors


const MongoDBURL = "mongodb+srv://mernstack:mernmern123@cluster0.fruae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const PORT = process.env.PORT ;

mongoose.connect(process.env.CONNECTION_URL,{ })
.then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
.catch((error)=>{console.log(error.message)})


// mongoose.set("useFindAndModify",false)