import express from 'express'
import { sendUserController } from '../controller/sendUser.js'
// import { cr } from '../controller/createScheme.js'
// import {createController} from '../Unnecessary/create.js'
// import { addBranchcontroller } from '../controller/Branch.js'

const route = express.Router()

route.get('/Users',sendUserController)
export default route
