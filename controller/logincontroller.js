const express=require("express");
const Userlogin=require("../schema/loginschema");
const login=async function(req,res){
    try{
        const UserInfo=new Userlogin({
            Username:req.body.Username,
            password:req.body.password,
        });
        await UserInfo.save();
        return res.status(200).json({message:"logined"});
    }
    catch(error){
        console.log("error");
    }
    

 }
 module.exports=login;