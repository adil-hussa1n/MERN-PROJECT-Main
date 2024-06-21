import User from "../models/usermodel.js"
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import  Jwt from "jsonwebtoken";




export const signup = async (req, res, next) => {
    console.log("this is enter in the controller")
    const { username, email, password } = req.body;
    try {
        const hashpassword = bcryptjs.hashSync(password, 10);
        console.log(hashpassword)

        const existUser = await User.findOne({ email: email })
        if (existUser) {
            return res.status(200).json({
                status: "success",
                message: "user already exists",
                success: "false"
                
            })
        }
        const newUser = await User.create({
            email: email,
            password: hashpassword,
            username: username
        })

            res.status(200).json({ message: "User created successfully", data: newUser });
    }
    catch (err) {
        next(err)
        console.log(err.message)
    }
};

export const signin =async(req, res,next)=>{
      const {email, password} = req.body;
      try{
        const vaildUser = await User.findOne({email});
         if(!vaildUser) return next(errorHandler(404,'User not found'))
         const vaildpassword = bcryptjs.compareSync(password,vaildUser.password);
        if(!vaildpassword)return next(errorHandler(401,'Password not match'))
         
        const token = Jwt.sign({id:vaildUser._id},process.env.JWT_SECRET);
        const {password: hashpassword, ...rest} = vaildUser._doc;
        const expiryDate = new Date(Date.now()+3600000)
        res.cookie('access_token',token,{httpOnly:true, expires:expiryDate}).status(200).json(rest)

      }
      catch(err){
            next(err)
      }
}



export const google = async(req, res, next)=>{
    try{
        const user = await User.findOne({email: req.body.email})
        if(user){
            const token = Jwt.sign({id: user._id}, process.env.JWT_SECRET);
            const {password: hashpassword, ...rest} = user._doc;
            const expiryDate = new Date(Date.now() + 3600000);
            res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(rest);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashpassword = bcryptjs.hashSync(generatedPassword,10);

            const newUser = await User.create({
                username : req.body.name,
                email: req.body.email,
                password: hashpassword,
                profilePicture: req.body.photo
            })
            const token = Jwt.sign({id: newUser._id}, process.env.JWT_SECRET);
            const {password: hashpassword2, ...rest} = newUser._doc;
            const expiryDate = new Date(Date.now() + 3600000);
            res.cookie('access_token',token,{httpOnly:true,expires:expiryDate}).status(200).json(rest);

        }
    }
    catch(error){
        next(error)
    }
}