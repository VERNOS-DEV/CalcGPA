import express from 'express';
import { registerUserController } from '../controller/userRegister.js';
import { userLoginController } from '../controller/userLogin.js';
import { userAcademicsController } from '../controller/userAcademics.js';

const route = express.Router()
route.post('/registerUser', registerUserController);
route.post('/loginUser',userLoginController)
route.patch('/updateUserAcademics/:id', userAcademicsController)
export default route