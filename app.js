const express =require("express");
const bodyParser=require("body-parser");
const router=require("./routes/user.routes");

const app=express();
app.use(bodyParser.json());
app.use(router);
module.exports=app;

const mongoose=require("mongoose");
const { resourceLimits } = require("worker_threads");

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