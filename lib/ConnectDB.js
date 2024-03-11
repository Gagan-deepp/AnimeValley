import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);
    if (!process.env.MONGODB_URL) return console.log("URL of DB not found")

    if (isConnected) {
        console.log("Already connected TO DB");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
        console.log("Connected To DB")
    } catch (error) {
        console.log("Error While connecting to databse!", error)
    }
}