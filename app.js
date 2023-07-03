const express =require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const userrouter=require("./routes/user.routes");
const todorouter=require("./routes/todo.routes");

const app=express();
app.use(bodyParser.json());
app.use(userrouter);
app.use(todorouter);

port=3001;

dburl="mongodb+srv://khansk13:mypassword@cluster0.dkbcfkn.mongodb.net/vikas?retryWrites=true&w=majority"

mongoose.connect(dburl)
 .then((result)=>{
  console.log("database connected")
 })
 .catch((err)=>{
    console.log(err);
 })

 app.get('/',(req,res)=>{
    res.send('hello world');
 })

 app.listen(port,()=>{
    console.log("server listening on http://localhost:"+port);
 })