import AdminModel from "../models/Admin.Model.js";
export const deleteSchemeController = async(req,res,next) =>{
    try{
        const {id} = req.params
        const scheme = await AdminModel.findOne({_id:id})
        if(!scheme){
            next('No scheme found')
        }
        await  AdminModel.deleteOne({_id:id})
        res.status(200).json({
            message: 'Scheme is deleted successfully',
            success: true,
        })
    }catch(err){
        next(err)
    }
}