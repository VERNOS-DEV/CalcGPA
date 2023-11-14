// import Scheme from '../models/SchemeModel.js' 
import AdminModel from '../models/Admin.Model.js'
export const createSchemeController = async(req, res) =>{
    
    try{
        const {scheme, Branch} = req.body

        const branches = Branch.map(branchData => {
            const { branchName, semesters } = branchData; 
            const branchSemesters = semesters.map(semesterData => {
              const { sem, subjects } = semesterData; 
              const semesterSubjects = subjects.map(subjectData => {
                const { subjectName, subjectCode, credit } = subjectData; 
                return {
                  subjectName,
                  subjectCode,
                  credit,
                };
              });
        
              return {
                sem,
                subjects: semesterSubjects,
              };
            });

            return {
              branchName,
              semesters: branchSemesters,
            };
          });

        const existingScheme = await AdminModel.findOne({scheme})
        if(existingScheme){
            return res.status(200).send({
                succcess: true,
                message: "scheme already exits"
            })
        }
        
        if(!scheme){
            return res.status(401).json({success: false, error:"No data provided"})
        }
        const ad = {
            scheme,
            Branch : branches
        }
        const sc = await AdminModel.create(ad)
        res.status(200).json({
            success: true,
            message: 'scheme posted successfully',
            sc
        })
    }catch(err){
        console.log(err)
    }
   
}

// const adminData = {
 //   scheme:{
//     schemeName : "2021",
//     branches : [{
//         branchName : "CS",
//         semesters: [{
//             sem: 1,
//             subjects: [{
//                 subjectCode : "21CS41",
//                 subjectName : "Maths",
//                 creditPoint : 3
//             },
//             {
//                 subjectCode : "21CS56",
//                 subjectName : "XYZ",
//                 creditPoint : 3
//             },
//             ]
//         },
//         {
//             sem: 2,
//             subjects: [{
//                 subjectCode : "21CS41",
//                 subjectName : "Maths",
//                 creditPoint : 3
//             },
//             {
//                 subjectCode : "21CS56",
//                 subjectName : "XYZ",
//                 creditPoint : 3
//             },
//             ]
//         },
//         ]
//     },
//     {
//         branchName : "CS",
//         semesters: [{
//             sem: 1,
//             subjects: [{
//                 subjectCode : "21CS41",
//                 subjectName : "Maths",
//                 creditPoint : 3
//             },
//             {
//                 subjectCode : "21CS56",
//                 subjectName : "XYZ",
//                 creditPoint : 3
//             },
//             ]
//         },
//         {
//             sem: 2,
//             subjects: [{
//                 subjectCode : "21CS41",
//                 subjectName : "Maths",
//                 creditPoint : 3
//             },
//             {
//                 subjectCode : "21CS56",
//                 subjectName : "XYZ",
//                 creditPoint : 3
//             },
//             ]
//         },
//         ]
//     }
//     ]
// }
//}