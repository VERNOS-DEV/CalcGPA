import AdminModel from '../models/Admin.Model.js';
import UserModel from '../models/User.Model.js'
export const sendUserController = async(req,res)=>{
    try{
        const data = await UserModel.find()
        if(data.length===0){
            res.status(200).json({
                success:true,
                message: "No data found"
            })
        }
        res.status(200).json({
            success: true,
            data
        })
    }catch(err){
        err
    }
}