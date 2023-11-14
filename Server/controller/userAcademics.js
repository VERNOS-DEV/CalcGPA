import AdminModel from "../models/Admin.Model.js";
import UserModel from "../models/User.Model.js";
export const userAcademicsController = async(req,res,next) =>{
    try{
        const {id} = req.params
        const {scheme, branch, AcademicDetails} = req.body
        if(!AcademicDetails){
            next('Academic details are not provided!')
        }
        const user = await UserModel.findOne({_id:id})
        if(!user){
            next('No user found')
        }
        const newAcdemicDetail = await UserModel.findByIdAndUpdate({_id:id},{
            scheme,
            branch,
            AcademicDetails
        })
        res.status(200).json({
            message:'Academics details updated successfully',
            success: true,
            data: {AcademicDetails},
            updated : newAcdemicDetail
        })
    }catch(err){
        next('error in userAcademics Controller')
        err
    }
}