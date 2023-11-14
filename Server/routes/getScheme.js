import express from 'express'
import { sendSchemeController } from '../controller/sendScheme.js'

const route = express.Router()
route.get('/getScheme',sendSchemeController)
export default route