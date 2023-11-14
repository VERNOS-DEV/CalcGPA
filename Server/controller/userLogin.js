import UserModel from "../models/User.Model.js";
import bcrypt from 'bcryptjs';
export const userLoginConmtroller = async(req,res,next)=>{
    try{
        const {email, password} = req.body
        if (!email || !password) {
            res.status(201).json({
                message : 'Something is missing',
                success : true,
            });
            next("invalid any field");
          }
      
          const user = await UserModel.findOne({ email });
          
          if(!user){
              res.status(404).json({
                  success: false,
                  message:"User not found",
                  user
              })
              next('invalid user or email')
          }
          const isPasswordValid1 =  bcrypt.compare(password, user.password);
          const isPasswordValid2 = bcrypt.compareSync(password,user.password)
          if(!isPasswordValid1 && !isPasswordValid2){
              res.status(401).json({
                  success: false,
                  message:"Incorrect password"
              })
              next('invalid password')
          }
          res.status(200).json({
            success: true,
            message:"Logged in successfully",
            data : {
                user
            }
        })

    }catch{
        next('Something went Wrong error in Login')
        
    }
}