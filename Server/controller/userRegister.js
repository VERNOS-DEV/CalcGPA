import UserModel from "../models/User.Model.js";
import bcrypt from 'bcryptjs';


export const registerUserController = async(req, res) => {
    try {
        const { name, email, usn, password, scheme, branch } = req.body;
        if (!name || !email || !usn || !password || !scheme || !branch) {
            return res.status(400).json({
                message: 'Something is missing',
                success: false,
            });
        }

        const existingEmail = await UserModel.findOne({ email });
        const existingUSN = await UserModel.findOne({ usn });
        if (existingEmail && existingUSN) {
            return res.status(409).json({
                success: false,
                message: {
                    msg1:"User already exists with this Email",
                    msg2:"User already exists with this USN",
                    code:407
                }
            });
        }
        if (existingEmail || existingUSN) {
            return res.status(409).json({
                success: false,
                message: existingEmail ? { msg:"User already exists with this Email", code:405} : {msg:"User already exists with this USN", code:406}
            });
        }
        

        const newUser = {
            name,
            email,
            password: bcrypt.hashSync(password),
            usn,
            scheme,
            branch,
        };
        
        const user = await UserModel.create(newUser);
    
        return res.status(200).json({
            success: true,
            message: {msg:"User registered successfully", code:200},
            
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'Error in register controller',
            error: err.message
        });
    }
};


// export const registerUserController = async(req,res,next) =>{
//     try{
//         const {name,email, usn, password, scheme, branch } = req.body;
//         if(!name||!email || !usn || !password || !scheme || !branch){
//             res.status(201).json({
//                 message : 'Something is missing',
//                 success : true,
//             });
//             next('something is missing');
//         }
        
//         const existingEmail = await UserModel.findOne({email})
//         const existingUSN = await UserModel.findOne({usn});
//         if(existingEmail && existingUSN){
//             return res.status(300).send({
//                 succcess: true,
//                 message: "user already exits with this USN and Email"
//             })
//         }
//         if(existingUSN ){
//             return res.status(300).send({
//                 succcess: true,
//                 message: "user already exits with this USN"
//             })
//         }
//         if(existingEmail){
//             return res.status(300).send({
//                 succcess: true,
//                 message: "user already exits with this Email"
//             })
//         }
//         const newUser={
//             name : name,
//             email : email,
//             password : bcrypt.hashSync(password),
//             usn : usn,
//             scheme : scheme,
//             branch : branch,
//         };
        
        
//         const user = UserModel.create(newUser)
//         res.status(200).send({
//             succcess: true,
//             message: "User is registered successfully",
//             user
//         })
//     }catch(err){
//         next('Error is register controller')
//         err
//     }
// }