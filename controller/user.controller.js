const userService=require('../service/user.service');

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
module.exports={register}