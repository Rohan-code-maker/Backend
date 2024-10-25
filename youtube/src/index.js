import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:'./.env'
})

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port:${process.env.PORT}`);
        
    })
})
.catch((err) => {
    console.log("MongoDb Connection error:",err);
})



/*
import express from "express";
const app = express()

// Database connection
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:",error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on post ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Error:",error)
        throw error
    }
})()
*/