import mongoose from "mongoose";
const MONGODB_URL = 'mongodb+srv://CalcGPA:NVRS@cluster0.mkirhcm.mongodb.net/?retryWrites=true&w=majority'
// const MONGODB_URL = process.env.DATABASE || "mongodb+srv://VERNOS_DEV:VERNOS.DEV@MongoDB@cluster0.s4zasri.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(MONGODB_URL)
            console.log("Connected to MongoDB")
        }catch(error){
            console.log(`MongoDB error : ${error}`)
    }
}

export default connectDB