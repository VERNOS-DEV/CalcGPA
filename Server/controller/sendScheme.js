import AdminModel from '../models/Admin.Model.js';
export const sendSchemeController = async(req,res)=>{
    try{
        const data = await AdminModel.find()
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