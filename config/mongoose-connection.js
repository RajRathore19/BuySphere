import mongoose from "mongoose";

 mongoose.connect("mongodb://127.0.0.1:27017/BuySphere").then(()=>{
    console.log("connect Database")
}).catch((err)=>
{
    console.log(err);
});

export default mongoose.connection;
