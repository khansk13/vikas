const mongoose=require("mongoose");
const userModel=require("../model/user.model")
const schema=mongoose.Schema

const todoshema= new schema({
    userId:{
        type:schema.Types.ObjectId,
        ref:"users"
    },
    title:{
        type:"string",
        required:true
    },
     description:{
        type:"string",
        required:true       
     }

})

const todoModel=mongoose.model("task",todoshema);
module.exports=todoModel;