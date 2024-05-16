
const mongoose=require("mongoose");
const registerschema=new mongoose.Schema({
    Username:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
    })
    module.exports=mongoose.model("register",registerschema);


