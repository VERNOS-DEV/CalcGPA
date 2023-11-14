import AdminModel from "../models/Admin.Model.js";
export const updateSchemeController = async(req,res,next) =>{

    try{
        const {id} = req.params
        const {scheme,Branch} = req.body
        if(!Branch){
            next('Please Provide Branch Data')
        }

        const branch = await AdminModel.findOne({_id:id})
        if(!branch){
            next(`no scheme found with this ${id}`)
        }
        const updateBranch = await AdminModel.findByIdAndUpdate({_id:id},{
            scheme,
            Branch
        })
        res.status(200).json({
            message: 'Scheme is updated successfully',
            success: true,
            // data:{updateBranch}
        })
    }catch(err){
        err
    }

}