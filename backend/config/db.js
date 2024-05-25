import mongoose from "mongoose";


export const connectDb = async () => {
    await mongoose.connect('mongodb+srv://ankitjha1403:Athena69@cluster0.zrpvhqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log("db connected"));
}