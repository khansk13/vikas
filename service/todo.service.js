const todoModel = require("../model/todo.model");

class todoService{
    static async createtodo(userId,title,description){
        try{
            const createtodo=await todoModel.create({userId,title,description});
            return createtodo;
        }catch(err){
            console.log(err);
        }
    }
    static async gettodo(userId){
             try{
                const tododata=await todoModel.find({userId});
                return tododata;
             }catch(err){
                console.log(err);
             }
    } 
    static async deletetodo(id){
        try{
            const deleteTodo=await todoModel.findOneAndDelete({_id:id});
            return deleteTodo;
        }catch(err){
            console.log(err);
        }
    }
}
module.exports=todoService;