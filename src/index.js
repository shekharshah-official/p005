import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path :'./env'
})

connectDB();






















/*
import  Express  from "express";
const app = Express();

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);s
        app.on("error",(error) => {
            console.log("application is not able to talk",error);
            throw error;
        })
        app.listen(process.env.PORT,() => {
            console.log(`application is listning on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("error",error);
        throw error;
    }
})()


*/