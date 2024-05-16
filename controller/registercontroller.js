const express=require("express");
const UserRegister=require("../schema/registerschema");
const register=async function(req,res){
    try{
        const newUser=new UserRegister({
         Username:req.body.Username,
        Email:req.body.Email,
        password:req.body.password,
    });

        await newUser.save();
        return res.status(200).json({message:"registerd"});
    }
    catch(error){
        console.log(error);
    }
}
     module.exports=register;