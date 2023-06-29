const userCont=require('../controller/user.controller');
 const express=require('express');

 const router=express.Router()

 router.post('/register',userCont.register)
router.post('/login',userCont.login)
 module.exports=router;