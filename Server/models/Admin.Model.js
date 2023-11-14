import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
   subjectName : {
      type : String
   },
   subjectCode : {
      type : String
   },
   credit : {
      type : Number
   }
})
const semesterSchema = new mongoose.Schema({
   sem: { type: Number},
   subjects : {
      type : [{type : subjectSchema},]
   }
})

const branchSchema = new mongoose.Schema({
   branchName: { type: String, required: true },
   semesters : [semesterSchema,]
})
const AdminSchema = new mongoose.Schema({
     scheme: {
        type : String,
        required : true,
     } ,
     Branch : [{type: branchSchema},]
});

export default mongoose.model('Admin', AdminSchema)







// {
//    "scheme": "233",
//    "Branch": [
//      {
//        "branchName": "Information Technology",
//        "semesters": [
//          {
//            "sem": 1,
//            "subjects": [
//              {
//                "subjectName": "Mathematics",
//                "subjectCode": "CS101",
//                "credit": 4
//              },
//              {
//                "subjectName": "Physics",
//                "subjectCode": "CS102",
//                "credit": 4
//              },
//              {
//                "subjectName": "Chemistry",
//                "subjectCode": "CS103",
//                "credit": 4
//              }
//            ]
//          },
//          {
//            "sem": 2,
//            "subjects": [
//              {
//                "subjectName": "Data Structures and Algorithms",
//                "subjectCode": "CS201",
//                "credit": 4
//              },
//              {
//                "subjectName": "Object Oriented Programming",
//                "subjectCode": "CS202",
//                "credit": 4
//              },
//              {
//                "subjectName": "Database Management Systems",
//                "subjectCode": "CS203",
//                "credit": 4
//              }
//            ]
//          }
//        ]
//      }
//    ]
//  }
 




















// const AdminSchema = new mongoose.Schema({
//     scheme : {
//             type :String,
//             required: true
//         },
//         branches : [{
//                 branchName : {
//                     type : String,
//                 },
//                 semesters:[{
//                     sem:{
//                         type: Number,
//                     },
//                     subjects:[{
//                         subjectCode : {
//                         type : String
//                     },
//                     subjectName: {
//                         type : String
//                     },
//                     creditPoint:{
//                         type :Number
//                     }
//                 },]
//             },]
//         },]
//     }, 
// );