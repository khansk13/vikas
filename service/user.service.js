const userModel = require("../model/user.model");
const model=require("../model/user.model");
const jwt  = require('jsonwebtoken');

class userService{
    static async registerUser(email,password){
        try{
            const createrUser=await userModel.create({email,password});
            return createrUser;
        } catch(err){
            console.log(err);
        
        }
    }
        static async checkUser(email){
            try{
                const user=await userModel.findOne({email})
                return user

            }catch(err){
                console.log(err);
            }
        }
        static async tokenData(tokenData,secertkey){
            try{
                const token=await jwt.sign(tokenData,secertkey,{expiresIn:'1D'})
                return token
            }catch(err){
                console.log(err);
            }
        }
    }

module.exports=userService;