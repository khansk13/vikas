const todocont=require("../controller/todo.controller");
const express=require("express");

const router=express.Router()

router.post('/createtodo',todocont.createtodo);
router.post('/gettodo',todocont.gettodo);
router.post('/deletetodo',todocont.deletetodo);

module.exports=router;