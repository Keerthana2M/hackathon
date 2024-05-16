const express=require("express");
const { mkdir } = require("fs");
const router=express.Router();
router.post("/SignUp",require("../controller/registercontroller"));
router.post("/signin",require("../controller/logincontroller"));
module.exports=router;
