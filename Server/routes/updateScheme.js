import express from 'express'
import { updateSchemeController } from '../controller/update.js'

const route = express.Router()
route.patch('/updateScheme/:id',updateSchemeController)
export default route