const userService=require('../service/user.service');
const bcrypt=require('bcrypt')
const register=async(req,res)=>{
    try{
        const{email,password}=req.body
        const user=await userService.registerUser(email,password);
        res.json(user)
    }
    catch(err){
        console.log(err);
    
    }
}
const login = async(req,res)=>{
    try{
        const {email,password}=req.body

        const user= await userService.checkUser(email)
        if(ismatch){
        throw new error('user not pound')

        }
      const checkUser= await bcrypt.compare(password,user.password)
      if(ismatch){
      throw new error('invaild password')
    }
let tokendata={
    id:user._id,
    email:user.email}

    const token=await userService.tokenData(tokendata,'secertkey');
    res.status(200).json({
        status:true,
        token:token
    })}
    catch(err){
        console.log(err);
    }}

module.exports={register,login}