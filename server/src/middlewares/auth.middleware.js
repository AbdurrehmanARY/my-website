import jwt from "jsonwebtoken"
import users from "../models/user.model.js";

export const isAuth=async(req,res,next)=>{

    // for getting user data get user from cookie
const {token}=req.cookies

// if no token login first
if(!token){return(
    res.json(
        {  message:'login first',
           

         }
    )
)}
// jwt verify is use to decode jwt token and jwt.sign is used to sign token
const decode=jwt.verify(token,process.env.JWT_SECRET)

 req.user=await users.findById(decode._id)
next()
}