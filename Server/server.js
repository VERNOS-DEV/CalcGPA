import express from 'express'
import connectDB from './database/conn.js'
import cors from 'cors'
import dotenv from 'dotenv'
import addScheme from './routes/addscheme.js'
import getSchema from './routes/getScheme.js'
import updateScheme from './routes/updateScheme.js'
import deleteScheme from './routes/deleteScheme.js'
import registerUser from './routes/userRoute.js'
import loginUser from './routes/userRoute.js';
import updateUserAcademics from './routes/userRoute.js'

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config()
const port = process.env.PORT || 4552
// app.use("/api",addBranch )
app.use("/api",addScheme)
app.use('/api',getSchema)
app.use('/api',updateScheme)
app.use('/api',deleteScheme)
app.use('/api',registerUser)
app.use('/api',loginUser)
app.use('/api',updateUserAcademics)
connectDB();
app.get('/', (req, res) =>{
    res.send('Server started')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
// app.use('/api',addBranch)

// createSchemeController()

