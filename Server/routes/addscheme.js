import express from 'express'
import { createSchemeController } from '../controller/createScheme.js'
// import {createController} from '../Unnecessary/create.js'
// import { addBranchcontroller } from '../controller/Branch.js'
const route = express.Router()

route.post('/createScheme',createSchemeController)
export default route


