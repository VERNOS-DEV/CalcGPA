import express from 'express'
import { deleteSchemeController } from '../controller/deleteScheme.js'

const route = express.Router()
route.delete('/deleteScheme/:id',deleteSchemeController)
export default route