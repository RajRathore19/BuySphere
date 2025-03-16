import mongoose from "mongoose";

mongoose.connect("mongoose://127.0.0.1:27017/BuySphere");

const userSchema = mongoose.Schema({
    fullname:String,
    email : String,
    password : String,
    cart:{
        type:Array,
        default : []
    },
    isadmin: Boolean,
    orders:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String

})

export default  mongoose.model("user", userSchem);