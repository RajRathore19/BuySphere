import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("connect Database")
}).catch((err)=>
{
    console.log(err);
});

export default mongoose.connection;
