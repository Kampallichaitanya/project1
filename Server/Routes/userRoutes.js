const express =require("express")
const{ Signups,Login} = require("../controllers/Signupcontroller")

const router=express.Router();

router.post("/signup",Signups);
router.post("/login",Login);




module.exports=router;