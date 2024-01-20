import UserModel from "../models/User.Model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'


const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3m'});
}

export const userLoginController = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email or password is missing',
                success: false,
            });
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                const token = createToken(user._id);
                return res.status(200).json({
                    success: true,
                    message: "Logged in successfully",
                    data: { token }
                });
            } else {
                return res.status(401).json({
                    success: false,
                    message: "Incorrect password"
                });
            }
        }
    } catch (error) {
        next('Something went wrong error in Login');
    }
};

