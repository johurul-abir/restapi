
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const mongodbConnection = async () => {
    try {

       const connection = await mongoose.connect(process.env.MONGO_DB);

       console.log(`MongoDB Connected succecssfull`.bgBlue.black);

    } catch (error) {
        console.log(`MongoDB Connection Failed ${error}`.bgRed.black);
    }
};