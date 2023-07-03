const todoService = require('../service/todo.service');

const createtodo=async(req,res)=>{
    try{
        const{userId,title,description}=req.body
        const todo=await todoService.createtodo(userId,title,description)
        res.json({
            status:true,
            sucess: todo
        })
    }
    catch(err){
        log(err);
    } 
}
    const gettodo=async (req,res)=>{
    try{
        const{userId}=req.body
        const todo=await todoService.gettodo(userId)
        res.json({
            status:true,
            sucess: todo
        })
    }catch(err){
        console.log(err);
    }
}
const deletetodo=async (req,res)=>{

    try{
        const{id}=req.body
        const todo=await todoService.deletetodo(id)
        res.json({
            status:true,
            sucess: todo
        })
    }
    catch(err){
        log(err);
    }
}
module.exports={
    createtodo,
    gettodo,
    deletetodo
}