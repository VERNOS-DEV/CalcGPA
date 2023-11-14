import mongoose from "mongoose";
import validator from "validator";
const subjectSchema = new mongoose.Schema({
    subjectName : {
       type : String
    },
    subjectCode : {
       type : String
    },
    credit : {
       type : Number
    },
    marks : {
      type : Number
    }
 });
 const semesterSchema = new mongoose.Schema({
    sem: {type : Number},
    subjects : {
       type : [{type : subjectSchema},]
    },
    sgpa : {type : Number}
 });
 
 const branchSchema = new mongoose.Schema({
    branchName: { type: String, required: true },
    semesters : [semesterSchema,],
    cgpa : {type:Number}
 });

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
     },
    email: { 
        type: String, 
        required: true,
        unique: true,
        validate : validator.isEmail
     },
    usn : {
        type: String, 
        required: true,
        unique: true,
    },
    password: { type: String, required: true },
    scheme : {type:Number, required: true},
    branch : {type:String, required: true},
    AcademicDetails : [{type : branchSchema},]
});
export default mongoose.model('User', UserSchema);